// Biblioteca API — projeto base da prova de GitHub Actions.
// Usa apenas módulos nativos do Node.js (sem npm install).
const http = require('http');
const net = require('net');

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'db';
const DB_PORT = Number(process.env.DB_PORT || 5432);

const livros = [
  { id: 1, titulo: 'O Programador Pragmático', autor: 'Andrew Hunt e David Thomas' },
  { id: 2, titulo: 'Código Limpo', autor: 'Robert C. Martin' },
  { id: 3, titulo: 'O Projeto Fênix', autor: 'Gene Kim' },
];

// Verifica se o banco está aceitando conexões na porta do Postgres.
function bancoDisponivel() {
  return new Promise((resolve) => {
    const socket = net.connect({ host: DB_HOST, port: DB_PORT });
    socket.setTimeout(2000);
    socket.once('connect', () => { socket.destroy(); resolve(true); });
    socket.once('timeout', () => { socket.destroy(); resolve(false); });
    socket.once('error', () => resolve(false));
  });
}

function responder(res, status, corpo) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(corpo));
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    const ok = await bancoDisponivel();
    return ok
      ? responder(res, 200, { status: 'ok', db: 'connected' })
      : responder(res, 503, { status: 'error', db: 'disconnected' });
  }
  if (req.method === 'GET' && req.url === '/livros') {
    return responder(res, 200, livros);
  }
  if (req.method === 'GET' && req.url === '/') {
    return responder(res, 200, { app: 'Biblioteca API', versao: '1.0.0' });
  }
  responder(res, 404, { erro: 'Rota não encontrada' });
});

server.listen(PORT, () => console.log(`Biblioteca API ouvindo na porta ${PORT}`));

// Encerra de forma limpa quando o container é parado.
process.on('SIGTERM', () => server.close(() => process.exit(0)));
