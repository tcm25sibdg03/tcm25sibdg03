# Relatório de Especificação da Base de Dados

## Esquema Relacional:

### Tabela de livro
#### DESCRIÇÃO:

### Relações:
### Tabela da relação - Tem

#### DESCRIÇÃO:
A tabela tem foi criada através da relação N:M entre LOJA e LIVRO e quantidade.

#### COLUNAS <!-- omit in toc -->

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idLoja       | identificador de cada loja | INT      | -           | -        | Não  |
| isbn     | identificador único de livros           | INT        | -       | -        | Não  |
| quantidade     | quantidade do stock de livros por loja           | INT | -           | -        | Não  |

[< Previous](REBD03.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
