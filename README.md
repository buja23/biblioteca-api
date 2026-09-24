# Biblioteca API: projeto base da prova

Este repositório já traz a aplicação **pronta e funcionando**. Você **não precisa alterar nenhum código**: sua tarefa na prova é criar o workflow do GitHub Actions.

## O que já existe

| Arquivo | Para que serve |
|---|---|
| `src/app.js` | API em Node.js (sem dependências externas) |
| `package.json` | Metadados e script `npm start` |
| `Dockerfile` | Constrói a imagem da API |
| `docker-compose.yml` | Sobe a API + banco PostgreSQL |
| `.env.example` | Modelo das variáveis de ambiente |
| `.dockerignore` / `.gitignore` | Arquivos ignorados |

## Endpoints

| Rota | Resposta |
|---|---|
| `GET /health` | **200** `{"status":"ok","db":"connected"}` quando a API e o banco estão no ar; **503** enquanto o banco não responde |
| `GET /livros` | **200** com a lista de livros |
| qualquer outra rota | **404** |

## Rodando na sua máquina (opcional)

```bash
cp .env.example .env
docker compose up -d --build
curl http://localhost:3000/health
docker compose down -v
```

> O arquivo `.env` **não** vai para o Git (está no `.gitignore`). No pipeline, você precisa criá-lo a partir do `.env.example`.

## O que você deve criar

Apenas o arquivo:

```
.github/workflows/pipeline-biblioteca.yml
```

Siga o enunciado da prova.
