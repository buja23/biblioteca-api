# Validação final da lista — 02/10/2026

A solução foi integrada à `main` pelo [PR #1](https://github.com/buja23/biblioteca-api/pull/1).
O commit usado nas execuções e na imagem é
`2b1f0d63ecc853ebee02aa4c4021c3191e5dae3b`.

## Execuções reais

| Exercício | Resultado | Execução |
| --- | --- | --- |
| 2 | test e build aprovados em push na main | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37082788214) |
| 4 | Todos os steps aprovados: espera, HTTP 200, corpo JSON, HTTP 404 e limpeza | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37082788205) |
| 5 | lint, test, build e notify aprovados em push na main | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37082788186) |
| 6 | test e docker-build aprovados; imagem publicada com latest e SHA | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37082788209) |
| 7 — PR | test aprovado; build skipped | [Actions, tentativa 2](https://github.com/buja23/biblioteca-api/actions/runs/37057715515/attempts/2) |
| 7 — push | test e build aprovados em push na main | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37082788182) |
| 7 — falha proposital | Health check falhou; coleta, artifact e limpeza aprovados | [Actions](https://github.com/buja23/biblioteca-api/actions/runs/37082827795) |

No teste de falha, somente a condição de `/health` foi alterada para esperar
`.status == "erro"`. A API e o banco subiram normalmente. O artifact
`logs-compose-37082827795-1` foi baixado e contém os logs dos dois serviços.

O [PR #2](https://github.com/buja23/biblioteca-api/pull/2) de demonstração
foi encerrado sem merge. A condição correta foi restaurada também na branch
de demonstração. A `main` mantém a verificação `.status == "ok"`.

## Docker Hub

Imagem: [buja23/biblioteca-api](https://hub.docker.com/r/buja23/biblioteca-api/tags).

Tags confirmadas no Docker Hub:

- `latest`
- `2b1f0d63ecc853ebee02aa4c4021c3191e5dae3b`

As duas tags apontavam para o mesmo digest de manifesto:
`sha256:aef1e902cfca059560644482c81b3a99a30e8e69fa82a7c4c8d9551decc2e5ce`.

## Prints e logs

Veja [evidencias/README.md](evidencias/README.md) para todos os prints e o
artifact baixado. As capturas foram feitas das páginas reais do GitHub
Actions e do Docker Hub.

## Verificações locais

- actionlint 1.7.12 aprovado em todos os workflows, incluindo o modelo Loja API.
- Sintaxe Bash dos steps aprovada.
- Loops de espera verificados com sucesso imediato, sucesso na última tentativa
  e falha após esgotar as tentativas.
- `docker compose config -q` aprovado com ambiente copiado do exemplo.
- Senha de teste com caracteres especiais lida corretamente pelo Compose.
- `node --check src/app.js` e `git diff --check` aprovados.

Os três secrets de Actions foram confirmados por nome. Seus valores não
foram lidos nem incluídos na entrega.

## Exercício 3

A Loja API do enunciado é um projeto hipotético, diferente da biblioteca-api.
O arquivo [exercicio-03-loja-api.yml](exercicio-03-loja-api.yml) foi escrito
com os serviços `app/banco`, porta 8080 e rota `/status` e passou na
validação de workflow. A execução desse modelo depende daquele projeto.
