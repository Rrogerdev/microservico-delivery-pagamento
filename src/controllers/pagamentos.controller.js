const prisma = require("../config/prisma"); 
// Importa o módulo centralizado do RabbitMQ
const rabbitMQ = require("../config/rabbitmq");

class PagamentosController { 

  static async listar(req, res) { 
    try { 
      const pagamentos = await prisma.pagamentos.findMany({
        where: { pagamento_status: 1 }, 
      }); 

      res.send(200, pagamentos); 
    } catch (error) { 
      res.send(500, { message: "Erro ao listar pagamentos.", error }); 
    } 
  } 


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


  static async criar(req, res) { 
    try { 
      const { pedido_id, cupom_id, pagamentos_valor } = req.body; 
      
      if (!pedido_id) { 
        return res.send(400, { message: "O pedido_id é obrigatório." }); 
      } 
      console.log(cupom_id)
      const pagamentos_data = new Date();
      const novoPagamento = await prisma.pagamentos.create({ 
        data: { 
          pedido_id: Number(pedido_id), 
          cupom_id: cupom_id ? Number(cupom_id) : null,
          pagamentos_data: pagamentos_data,
          pagamentos_valor: pagamentos_valor
        } 
      }); 


      await rabbitMQ.publishPagamentoCriado({
        pagamento_id: novoPagamento.pagamento_id || novoPagamento.id,
        pedido_id: novoPagamento.pedido_id,
        pagamento_valor: pagamentos_valor ? Number(pagamentos_valor) : 0
      });

      res.send(201, novoPagamento); 
    } catch (error) { 
      res.send(500, { message: "Erro ao criar o pagamento.", error }); 
    } 
  } 


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

      // 📢 Notifica o RabbitMQ: Estado do pagamento alterado
      await rabbitMQ.publishPagamentoAtualizado({
        pagamento_id: pagamentoAtualizado.pagamento_id || pagamentoAtualizado.id,
        pagamento_status: pagamentoAtualizado.status
      });

      res.send(200, pagamentoAtualizado); 
    } catch (error) { 
      res.send(500, { message: "Erro ao atualizar o status do pagamento." }); 
    } 
  } 


  static async remover(req, res) { 
    try { 
      const { id } = req.params; 
      
      const pagamentoRemovido = await prisma.pagamentos.update({
        where: { pagamento_id: Number(id) }, 
        data: { pagamento_status: 0 } 
      });

      await rabbitMQ.publishPagamentoRemovido(pagamentoRemovido.pagamento_id || pagamentoRemovido.id);

      res.send(200, pagamentoRemovido); 
    } catch (error) { 
      res.send(500, { message: "Erro ao remover (soft delete) o pagamento." }); 
    } 
  } 
} 

module.exports = PagamentosController;
