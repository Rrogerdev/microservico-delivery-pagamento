const prisma = require("../config/prisma"); 
// Importa o módulo centralizado do RabbitMQ
const rabbitMQ = require("../config/rabbitmq");

class CuponsController { 
  // GET /cupons/{id}
  static async buscarPorId(req, res) { 
    try { 
      const { id } = req.params; 

      const cupom = await prisma.cupons.findUnique({ 
        where: { cupom_id: Number(id) } 
      }); 

      if (!cupom) {
        return res.send(404, { message: "Cupom não encontrado." });
      }

      res.send(200, cupom); 
    } catch (error) { 
      res.send(500, { message: "Erro ao buscar cupom." }); 
    } 
  } 

  // POST /cupons
  static async criar(req, res) { 
    try { 
      const { cupom_codigo, cupom_desconto } = req.body; 

      if (!cupom_codigo || cupom_desconto === undefined) { 
        return res.send(400, { message: "Código e desconto do cupom são obrigatórios." }); 
      } 

      const newCupom = await prisma.cupons.create({ 
        data: { 
          cupom_codigo: cupom_codigo, 
          cupom_desconto: Number(cupom_desconto) 
        } 
      }); 

      // 📢 Notifica o RabbitMQ: Novo cupom disponível no sistema
      await rabbitMQ.publishCupomCriado({
        cupom_id: newCupom.cupom_id || newCupom.id,
        cupom_codigo: newCupom.cupom_codigo,
        cupom_desconto: newCupom.cupom_desconto
      });

      res.send(201, newCupom); 
    } catch (error) { 
      res.send(500, { message: "Erro ao criar cupom." }); 
    } 
  } 

  static async buscarPorCodigo(req, res) {
  try {
    const { cupom_codigo } = req.params;

    const cupom = await prisma.cupons.findUnique({
      where: {
        cupom_codigo: cupom_codigo
      }
    });

    if (!cupom) {
      return res.send(404, { message: "Cupom não encontrado." });
    }

    res.send(200, cupom);
  } catch (error) {
    res.send(500, { message: "Erro ao buscar cupom." });
  }
}
  // PATCH /cupons/{id}
  static async atualizar(req, res) { 
    try { 
      const { id } = req.params; 
      const { cupom_codigo, cupom_desconto } = req.body; 

      const updatedCupom = await prisma.cupons.update({ 
        where: { id: Number(id) }, 
        data: { 
          cupom_codigo: cupom_codigo, 
          cupom_desconto: cupom_desconto !== undefined ? Number(cupom_desconto) : undefined 
        } 
      }); 

      // 📢 Notifica o RabbitMQ: Dados do cupom modificados
      await rabbitMQ.publishCupomAtualizado({
        cupom_id: updatedCupom.cupom_id || updatedCupom.id,
        cupom_codigo: updatedCupom.cupom_codigo,
        cupom_desconto: updatedCupom.cupom_desconto
      });

      res.send(200, updatedCupom); 
    } catch (error) { 
      res.send(500, { message: "Erro ao atualizar cupom." }); 
    } 
  } 

  // DELETE /cupons/{id}
  static async deletar(req, res) { 
    try { 
      const { id } = req.params; 

      const updatedCupom = await prisma.cupons.update({ 
        where: { id: Number(id) }, 
        data: { cupom_status: 0 } 
      }); 

      // 📢 Notifica o RabbitMQ: Cupom removido/desativado de circulação
      await rabbitMQ.publishCupomRemovido(id);

      res.send(200, updatedCupom); 
    } catch (error) { 
      res.send(500, { message: "Erro ao desativar cupom." }); 
    } 
  } 
} 

module.exports = CuponsController;
