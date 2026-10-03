# Evidências da entrega

| Exigência | Print |
| --- | --- |
| Exercício 4: steps com nomes e resultados | [04-steps.png](04-steps.png) |
| Exercício 6: duas tags no Docker Hub | [06-dockerhub-tags.png](06-dockerhub-tags.png) |
| Exercício 7: push na main com dois jobs verdes | [07-push-main-verde.png](07-push-main-verde.png) |
| Exercício 7: PR com build skipped | [07-pr-build-skipped.png](07-pr-build-skipped.png) |
| Exercício 7: falha proposital e artifact publicado | [07-falha-artifact.png](07-falha-artifact.png) |
| Exercício 7: step que falhou e limpeza aprovada | [07-falha-steps.png](07-falha-steps.png) |

Artifact baixado: [logs-falha-proposital.zip](logs-falha-proposital.zip).
Log extraído: [compose.log](logs-falha-proposital/compose.log).
A cópia local mantém a evidência mesmo após o artifact expirar no GitHub.

Os prints mostram páginas reais, sem editar os resultados. O teste negativo
foi feito no [PR #2](https://github.com/buja23/biblioteca-api/pull/2), encerrado
sem merge após a captura. A condição correta foi restaurada na branch.

Os links das execuções, SHA publicado e detalhes da validação estão em
[VALIDACAO.md](../VALIDACAO.md).
