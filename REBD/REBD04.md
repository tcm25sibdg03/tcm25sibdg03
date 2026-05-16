# Relatório de Especificação da Base de Dados

## Esquema Relacional:

### Tabelas de Entidades
### Tabela - LIVRO
#### DESCRIÇÃO:
Esta tabela é onde se pode encontrar ainda mais informação sobre cada livro.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idLoja       | identificador de cada loja | INT      | -           | -        | Não  |
| isbn     | identificador único de livros           | INT        | -       | -        | Não  |
| quantidade     | quantidade do stock de livros por loja           | INT | -           | -        | Não  |


### Relações N:M
### Tabela da relação - Tem

#### DESCRIÇÃO:
A tabela tem foi criada através da relação N:M entre LOJA e LIVRO e quantidade.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idLoja       | identificador de cada loja | INT      | -           | -        | Não  |
| isbn     | identificador único de livros           | INT        | -       | -        | Não  |
| quantidade     | quantidade do stock de livros por loja           | INT | -           | -        | Não  |

[< Previous](REBD03.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
