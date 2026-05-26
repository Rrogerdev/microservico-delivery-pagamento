const prisma = require("../config/prisma"); 
// Importa o módulo centralizado do RabbitMQ
const rabbitMQ = require("../config/rabbitmq");

class PagamentosController { 
  // GET /pagamentos
  static async listar(req, res) { 
    try { 
      const pagamentos = await prisma.pagamentos.findMany({ 
      }); 

      res.send(200, pagamentos); 
    } catch (error) { 
      res.send(500, { message: "Erro ao listar pagamentos.", error }); 
    } 
  } 

  // GET /pagamentos/{id}
  static async buscarPorId(req, res) { 
    try { 
      const { id } = req.params; 
      
      const pagamento = await prisma.pagamentos.findUnique({
        where: { pagamento_id: Number(id) }
      });

      if (!pagamento) {
        return res.send(404, { message: "Pagamento não encontrado." });
      }

      res.send(200, pagamento); 
    } catch (error) { 
      res.send(500, { message: "Erro ao buscar pagamento por ID." }); 
    } 
  } 

  // GET /pagamentos/pedido/{id}
  static async buscarPorPedido(req, res) { 
    try { 
      const { id } = req.params; 
      
      const pagamentos = await prisma.pagamentos.findMany({
        where: { pedido_id: Number(id) }
      });

      res.send(200, pagamentos); 
    } catch (error) { 
      res.send(500, { message: "Erro ao buscar pagamentos do pedido." }); 
    } 
  } 

  // POST /pagamentos
  static async criar(req, res) { 
    try { 
      const { pedido_id, cupom_id, valor_total } = req.body; 
      
      if (!pedido_id) { 
        return res.send(400, { message: "O pedido_id é obrigatório." }); 
      } 
      
      const novoPagamento = await prisma.pagamentos.create({ 
        data: { 
          pedido_id: Number(pedido_id), 
          cupom_id: cupom_id ? Number(cupom_id) : null
        } 
      }); 

      // 📢 Notifica o RabbitMQ: Pedido criado através deste pagamento
      await rabbitMQ.publishPedidoCriado({
        pedido_id: novoPagamento.pedido_id,
        pagamento_id: novoPagamento.pagamento_id || novoPagamento.id,
        pedido_valor: valor_total ? Number(valor_total) : 0
      });

      res.send(201, novoPagamento); 
    } catch (error) { 
      res.send(500, { message: "Erro ao criar o pagamento." }); 
    } 
  } 

  // PATCH /pagamentos/{id}
  static async atualizarStatus(req, res) { 
    try { 
      const { id } = req.params; 
      const { pagamento_status } = req.body;

      if (pagamento_status === undefined) {
        return res.send(400, { message: "O campo pagamento_status é obrigatório." });
      }

      const pagamentoAtualizado = await prisma.pagamentos.update({
        where: { id: Number(id) }, 
        data: { status: pagamento_status } 
      });

      // 📢 Notifica o RabbitMQ: O estado do pedido correspondente mudou
      await rabbitMQ.publishPedidoAtualizado({
        pedido_id: pagamentoAtualizado.pedido_id,
        pagamento_status: pagamentoAtualizado.status
      });

      res.send(200, pagamentoAtualizado); 
    } catch (error) { 
      res.send(500, { message: "Erro ao atualizar o status do pagamento." }); 
    } 
  } 

  // DELETE /pagamentos/{id}
  static async remover(req, res) { 
    try { 
      const { id } = req.params; 
      
      const pagamentoRemovido = await prisma.pagamentos.update({
        where: { id: Number(id) }, 
        data: { status: 0 } 
      });

      // 📢 Notifica o RabbitMQ: Pedido cancelado/removido do fluxo comercial
      await rabbitMQ.publishPedidoRemovido(pagamentoRemovido.pedido_id);

      res.send(200, pagamentoRemovido); 
    } catch (error) { 
      res.send(500, { message: "Erro ao remover (soft delete) o pagamento." }); 
    } 
  } 
} 

module.exports = PagamentosController;