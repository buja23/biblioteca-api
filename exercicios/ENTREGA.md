# Entrega da lista de GitHub Actions e Docker

As respostas estão em [respostas.txt](respostas.txt). Cada exercício prático
da biblioteca-api possui um workflow próprio:

| Exercício | Arquivo |
| --- | --- |
| 2 | [.github/workflows/exercicio-02.yml](../.github/workflows/exercicio-02.yml) |
| 3 | [exercicio-03-loja-api.yml](exercicio-03-loja-api.yml), modelo para a Loja API |
| 4 | [.github/workflows/exercicio-04.yml](../.github/workflows/exercicio-04.yml) |
| 5 | [.github/workflows/exercicio-05.yml](../.github/workflows/exercicio-05.yml) |
| 6 | [.github/workflows/exercicio-06.yml](../.github/workflows/exercicio-06.yml) |
| 7 | [.github/workflows/pipeline-biblioteca.yml](../.github/workflows/pipeline-biblioteca.yml) |

## Preparar o GitHub

Em Settings → Secrets and variables → Actions → New repository secret, crie:

- `POSTGRES_PASSWORD_CI`: senha do PostgreSQL usado nos exercícios 6 e 7.
- `DOCKERHUB_USERNAME`: usuário do Docker Hub.
- `DOCKERHUB_TOKEN`: token de acesso do Docker Hub com permissão de escrita.

Não coloque os valores em arquivos versionados. Os exercícios 2, 4 e 5
copiam o exemplo de ambiente conforme seus enunciados. Os exercícios 6 e 7
exigem o secret da senha e falham com uma mensagem clara se ele estiver ausente.

Os arquivos têm execução manual para facilitar a inspeção dos steps.
Os builds que publicam imagens só rodam em push na main; na execução manual
e nos PRs ficam skipped. As publicações dos exercícios 6 e 7 usam o mesmo
nome e as mesmas tags para a mesma imagem; ambas podem ocorrer em um push.

## Registrar as evidências

1. Publique as alterações em uma branch e abra um PR para `main`.
   Na aba Actions, abra **Exercício 7 - Pipeline Biblioteca API** e capture
   `test` verde e `build` skipped.
2. Integre as alterações à `main`. No run iniciado por push, capture
   `test` e `build` verdes. Execução manual não substitui essa evidência.
3. No Docker Hub, abra `<seu-usuario>/biblioteca-api`, aba Tags, e capture
   `latest` e a tag com o SHA completo do commit. É a evidência do exercício 6.
4. Execute **Exercício 4 - Um step, uma responsabilidade** e capture a
   lista de steps, mostrando os nomes descritivos e os resultados.
5. Para a falha proposital do exercício 7, crie uma branch temporária,
   altere a condição de /health para `.status == "erro"` e abra um PR
   para `main`. Capture o step vermelho e o artifact
   `logs-compose-<run_id>-<run_attempt>` na página do run. Baixe o
   artifact e confira `compose.log`. Restaure a condição antes da entrega
   e encerre o PR de demonstração sem integrar o erro.

PRs de forks normalmente não recebem os secrets do repositório. Para estes
exercícios, use uma branch no próprio repositório.

## Checklist

- [x] Workflows da biblioteca-api em `.github/workflows/*.yml`.
- [x] Indentação com espaços; jobs alinhados sob `jobs:`.
- [x] Serviços, portas, rotas e contexto conferidos no repositório.
- [x] Criação de `.env` antes dos comandos Compose.
- [x] Dependências `needs` apontam para jobs existentes.
- [x] Verificações separadas em steps com nomes descritivos.
- [x] Espera da API falha quando as tentativas acabam.
- [x] Limpeza usa `if: always()`.
- [x] Credenciais de publicação e senha dos exercícios 6/7 vêm de secrets.
- [x] Tags `latest` e SHA, com `context: .`.
- [x] Secrets configurados no GitHub.
- [x] Workflows da biblioteca-api executados na aba Actions.
- [x] Prints exigidos anexados em [evidencias/README.md](evidencias/README.md).

Execuções e evidências conferidas em [VALIDACAO.md](VALIDACAO.md).
O exercício 3 permanece como modelo para o projeto hipotético Loja API.
