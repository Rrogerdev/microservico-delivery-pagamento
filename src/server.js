const restify = require("restify"); 
const PagamentosController = require("./controllers/pagamentos.controller"); 
 
const server = restify.createServer({ 
  name: "api-delivery-pagamentos-restify" 
}); 

server.use(restify.plugins.queryParser()); 
server.use(restify.plugins.bodyParser()); 

server.get("/usuarios", PagamentosController.listar); 
server.post("/usuarios", PagamentosController.criar); 

const PORT = 3000; 
server.listen(PORT, () => { 
    console.log(`${server.name} rodando em ${server.url}`); 
}); 