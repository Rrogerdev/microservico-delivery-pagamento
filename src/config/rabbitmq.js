const amqplib = require('amqplib');

const RABBITMQ_URL       = process.env.RABBITMQ_URL || 'amqp://admin:admin@10.136.38.50:5672';
const RECONNECT_DELAY_MS = Number(process.env.RABBITMQ_RECONNECT_DELAY) || 5000;
const EXCHANGE           = 'delivery_platform';
const EXCHANGE_TYPE      = 'topic';

let connection = null;
let channel    = null;
let connecting = false;


const QUEUES = {
  CUPONS:      'cupons_queue',
  PEDIDOS:     'pedidos_queue',
  DEAD_LETTER: 'dead_letter_queue',
};


const EVENTS = {
  CUPOM_CRIADO:      'cupom.criado',
  CUPOM_ATUALIZADO:  'cupom.atualizado',
  CUPOM_REMOVIDO:    'cupom.removido',
  PEDIDO_CRIADO:     'pedido.criado',
  PEDIDO_ATUALIZADO: 'pedido.atualizado',
  PEDIDO_REMOVIDO:   'pedido.removido',
};

async function connect() {
  if (connecting) return;
  connecting = true;

  try {
    console.log('[RabbitMQ] Conectando em', RABBITMQ_URL.replace(/:\/\/.*@/, '://***@'));
    connection = await amqplib.connect(RABBITMQ_URL);
    channel    = await connection.createChannel();

    await channel.prefetch(1);

    // Garante a existência das Exchanges
    await channel.assertExchange(EXCHANGE, EXCHANGE_TYPE, { durable: true });
    await channel.assertExchange('dead_letter_exchange', 'direct', { durable: true });


    await channel.assertQueue(QUEUES.CUPONS, {
      durable: true,
      arguments: { 'x-dead-letter-exchange': 'dead_letter_exchange' },
    });
    await channel.bindQueue(QUEUES.CUPONS, EXCHANGE, 'cupom.#');


    await channel.assertQueue(QUEUES.PEDIDOS, {
      durable: true,
      arguments: { 'x-dead-letter-exchange': 'dead_letter_exchange' },
    });
    await channel.bindQueue(QUEUES.PEDIDOS, EXCHANGE, 'pedido.#');


    await channel.assertQueue(QUEUES.DEAD_LETTER, { durable: true });
    await channel.bindQueue(QUEUES.DEAD_LETTER, 'dead_letter_exchange', '');

    console.log('[RabbitMQ] Conectado. Exchange:', EXCHANGE);
    connecting = false;

    connection.on('close', () => {
      console.warn('[RabbitMQ] Conexão encerrada. Reconectando em', RECONNECT_DELAY_MS, 'ms...');
      connection = null;
      channel    = null;
      connecting = false;
      setTimeout(connect, RECONNECT_DELAY_MS);
    });

    connection.on('error', (err) => {
      console.error('[RabbitMQ] Erro na conexão:', err.message);
    });

  } catch (err) {
    connecting = false;
    console.error('[RabbitMQ] Falha ao conectar:', err.message, '— tentando novamente em', RECONNECT_DELAY_MS, 'ms');
    setTimeout(connect, RECONNECT_DELAY_MS);
  }
}


async function publish(routingKey, payload) {
  if (!channel) {
    console.warn('[RabbitMQ] Canal indisponível. Evento não publicado:', routingKey);
    return false;
  }
  try {
    const message = {
      event:     routingKey,
      timestamp: new Date().toISOString(),
      data:      payload,
    };

    const buffer = Buffer.from(JSON.stringify(message));
    channel.publish(EXCHANGE, routingKey, buffer, {
      persistent:  true,
      contentType: 'application/json',
      appId:       'api-vendas-cupons',
    });
    console.log('[RabbitMQ] Publicado:', routingKey, payload);
    return true;
  } catch (err) {
    console.error('[RabbitMQ] Erro ao publicar:', err.message);
    return false;
  }
}


async function publishCupomCriado(data)     { return await publish(EVENTS.CUPOM_CRIADO, data); }
async function publishCupomAtualizado(data) { return await publish(EVENTS.CUPOM_ATUALIZADO, data); }
async function publishCupomRemovido(id)     { return await publish(EVENTS.CUPOM_REMOVIDO, { cupom_id: Number(id) }); }


async function publishPedidoCriado(data)     { return await publish(EVENTS.PEDIDO_CRIADO, data); }
async function publishPedidoAtualizado(data) { return await publish(EVENTS.PEDIDO_ATUALIZADO, data); }
async function publishPedidoRemovido(id)     { return await publish(EVENTS.PEDIDO_REMOVIDO, { pedido_id: Number(id) }); }


function getChannel() {
  return channel;
}

async function close() {
  try {
    if (channel)    await channel.close();
    if (connection) await connection.close();
    console.log('[RabbitMQ] Conexão encerrada com segurança.');
  } catch (_) {}
}

module.exports = {
  connect,
  getChannel,
  close,
  QUEUES,
  EVENTS,
  publishCupomCriado,
  publishCupomAtualizado,
  publishCupomRemovido,
  publishPedidoCriado,
  publishPedidoAtualizado,
  publishPedidoRemovido,
};