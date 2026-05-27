const amqplib = require('amqplib');

const RABBITMQ_URL       = process.env.RABBITMQ_URL || 'amqp://admin:admin@10.136.38.50:5672';
const RECONNECT_DELAY_MS = Number(process.env.RABBITMQ_RECONNECT_DELAY) || 5000;
const EXCHANGE           = 'delivery_platform';
const EXCHANGE_TYPE      = 'topic';

let connection = null;
let channel    = null;
let connecting = false;


const QUEUES = {
  CUPONS:     'delivery_cupons_queue',
  PAGAMENTOS: 'delivery_pagamentos_queue',
};


const EVENTS = {
  CUPOM_CRIADO:         'cupom.criado',
  CUPOM_ATUALIZADO:     'cupom.atualizado',
  CUPOM_REMOVIDO:       'cupom.removido',
  PAGAMENTO_CRIADO:     'pagamento.criado',
  PAGAMENTO_ATUALIZADO: 'pagamento.atualizado',
  PAGAMENTO_REMOVIDO:   'pagamento.removido',
};

async function connect() {
  if (connecting) return;
  connecting = true;

  try {
    console.log('[RabbitMQ] Conectando em', RABBITMQ_URL.replace(/:\/\/.*@/, '://***@'));
    connection = await amqplib.connect(RABBITMQ_URL);
    channel    = await connection.createChannel();

    await channel.prefetch(1);


    await channel.assertExchange(EXCHANGE, EXCHANGE_TYPE, { durable: true });


    await channel.assertQueue(QUEUES.CUPONS, { durable: true });
    await channel.bindQueue(QUEUES.CUPONS, EXCHANGE, 'cupom.#');


    await channel.assertQueue(QUEUES.PAGAMENTOS, { durable: true });
    await channel.bindQueue(QUEUES.PAGAMENTOS, EXCHANGE, 'pagamento.#');

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


async function publishPagamentoCriado(data)     { return await publish(EVENTS.PAGAMENTO_CRIADO, data); }
async function publishPagamentoAtualizado(data) { return await publish(EVENTS.PAGAMENTO_ATUALIZADO, data); }
async function publishPagamentoRemovido(id)     { return await publish(EVENTS.PAGAMENTO_REMOVIDO, { pagamento_id: Number(id) }); }

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
  publishPagamentoCriado,
  publishPagamentoAtualizado,
  publishPagamentoRemovido,
};