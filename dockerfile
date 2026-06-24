# ─── Estágio de build ────────────────────────────────────────────────────────
FROM node:22-slim AS builder

# Instala o OpenSSL necessário para o Prisma gerar os artefatos corretamente
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copia arquivos de manifest e esquema do prisma primeiro para aproveitar o cache de dependências
COPY package*.json ./
COPY prisma ./prisma/

# Instala todas as dependências (incluindo devDependencies como o prisma CLI)
RUN npm ci

# Gera o Prisma Client (usando o prisma CLI local já instalado em node_modules, sem downloads redundantes)
RUN npx prisma generate

# Remove as dependências de desenvolvimento para que o node_modules final fique leve
RUN npm prune --production

# ─── Imagem final (menor) ─────────────────────────────────────────────────────
FROM node:22-slim

# IMPORTANTE: A imagem final também precisa do OpenSSL para rodar as queries no banco
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copia artefatos do estágio de build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./package.json

# Copia apenas o código fonte da aplicação por último (evita invalidar o cache das etapas anteriores)
COPY src ./src

# Porta exposta
ENV PORT=9524
EXPOSE 9524

# Health check usando o próprio Node para bater na porta dinâmica do ambiente
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD node -e "const http = require('http'); const req = http.request(\`http://localhost:\${process.env.PORT || 9524}/health\`, { timeout: 2000 }, (res) => process.exit(res.statusCode === 200 ? 0 : 1)); req.on('error', () => process.exit(1)); req.end();"

CMD ["node", "src/server.js"]
