# Validação realizada em 02/10/2026

Soluções publicadas na branch `exercicios/github-actions-docker`, no
[PR #1](https://github.com/buja23/biblioteca-api/pull/1).

## Verificações locais

- actionlint 1.7.12: todos os workflows aprovados, incluindo o modelo Loja API.
- Sintaxe Bash dos steps: aprovada.
- `docker compose config -q` com ambiente copiado do exemplo: aprovado.
- Senha de teste com caracteres especiais: leitura do `.env` validada pelo Compose.
- `node --check src/app.js`: aprovado.
- `git diff --check`: aprovado.

O serviço Docker local está indisponível; os testes com containers foram
executados no runner do GitHub, no exercício 4.

## Execuções reais no GitHub

| Exercício | Resultado | Execução |
| --- | --- | --- |
| 4 | Todos os steps passaram, incluindo HTTP 200, corpo JSON e HTTP 404 | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37057307396) |
| 5 | lint, test e notify passaram; build ficou skipped no PR | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37057307594) |
| 6 | Falhou ao detectar a ausência de POSTGRES_PASSWORD_CI | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37057307357) |
| 7 | Falhou ao detectar a ausência de POSTGRES_PASSWORD_CI; build skipped; artifact publicado | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37057307438) |

O artifact do primeiro run do exercício 7 contém o diagnóstico da falta de
`.env`, pois a falha ocorreu antes da subida. Ele não substitui a evidência
de falha proposital de /health exigida na lista. A ordem de criação de
`.env` foi corrigida depois dessa execução para permitir logs e limpeza
mesmo quando o secret está ausente.

A consulta dos nomes dos secrets confirmou que não havia secrets de Actions
configurados no repositório. Faltam `POSTGRES_PASSWORD_CI`,
`DOCKERHUB_USERNAME` e `DOCKERHUB_TOKEN`.

## Pendências

Configurar os três secrets, reexecutar os exercícios 6 e 7, executar os
builds por push na main e capturar os prints descritos em [ENTREGA.md](ENTREGA.md).
O exercício 2 tem gatilho de push na main e ainda precisa dessa execução.
O exercício 3 depende do projeto hipotético Loja API.
