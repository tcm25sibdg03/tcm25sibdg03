# Relatório de Especificação da Base de Dados

## Esquema Relacional:

### Tabela da relação - Tem

#### DESCRIÇÃO:
A tabela tem foi criada através da relação N:M entre LOJA e LIVRO e quantidade.

#### COLUNAS <!-- omit in toc -->

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idLoja       | identificador da tabela A | BIGINT      | -           | Sim        | Não  |
| isbn     | Data do registo           | DATE        | now()       | Não        | Não  |
| quantidade     | Nome do registo           | VARCHAR(50) | -           | Não        | Não  |

[< Previous](REBD03.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
