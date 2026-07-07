const restify = require("restify"); 
const PagamentosController = require("./controllers/pagamentos.controller"); 
const CuponsController = require("./controllers/cupons.controller"); 
const { authenticateToken } = require("./middlewares/authenticateToken");

// Importa a conexão unificada do RabbitMQ
const rabbitMQ = require("./config/rabbitmq"); 
const { loadSecrets } = require("./config/infiscal");
const server = restify.createServer({ 
  name: "api-delivery-pagamentos-restify" 
}); 
server.pre((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.send(200);
    return;
  }
  return next();
});
server.opts("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.send(200);
  return next();
});
server.use(restify.plugins.queryParser()); 
server.use(restify.plugins.bodyParser()); 

// Rotas de Pagamentos
server.get("/pagamentos", authenticateToken, PagamentosController.listar); 
server.get("/pagamentos/pedido/:id", authenticateToken, PagamentosController.buscarPorPedido); 
server.get("/pagamentos/:id", authenticateToken, PagamentosController.buscarPorId); 

server.post("/pagamentos", authenticateToken, PagamentosController.criar); 
server.patch("/pagamentos/:id", authenticateToken, PagamentosController.atualizarStatus); 
server.del("/pagamentos/:id", authenticateToken, PagamentosController.remover); 

// Rotas de Cupons
server.get("/cupons/:id", authenticateToken, CuponsController.buscarPorId); 
server.post("/cupons", authenticateToken, CuponsController.criar); 
server.patch("/cupons/:id", authenticateToken, CuponsController.atualizar); 
server.del("/cupons/:id", authenticateToken, CuponsController.deletar); 
server.get("/cupons/codigo/:cupom_codigo", authenticateToken, CuponsController.buscarPorCodigo); 

const PORT = 9524; 

// Função assíncrona para garantir que o RabbitMQ conecte antes do app abrir as portas
async function startServer() {

  try {

    await loadSecrets();
    
    
    // 1. Inicializa a infraestrutura de mensageria
    await rabbitMQ.connect();

    // 2. Levanta o servidor Restify
    server.listen(PORT, () => { 
      console.log(`${server.name} rodando em ${server.url}`); 
    });
  } catch (error) {
    console.error("Erro crítico ao iniciar aplicação:", error.message);
    process.exit(1);
  }
}

startServer();
