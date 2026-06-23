const { PrismaClient } = require('@prisma/client');

let prisma;

/**
 * Inicialização "preguiçosa" (lazy) do PrismaClient.
 * O client só é criado na primeira vez que alguém acessa uma propriedade (ex: prisma.pedido).
 * Isso garante que o DATABASE_URL já foi carregado pelo Infisical antes do Prisma tentar usá-lo.
 */
module.exports = new Proxy({}, {
  get(_, prop) {
    if (!prisma) {
      prisma = new PrismaClient();
      console.log("Prisma: Client inicializado com sucesso. Rodando em:" + process.env.DATABASE_URL);
    }
    return prisma[prop];
  }
});
