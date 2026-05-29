# Relatório de Especificação da Base de Dados

## Esquema Relacional:

### Tabelas de Entidades
### Tabela - LIVRO
#### DESCRIÇÃO:
Esta tabela é onde se pode encontrar ainda mais informação sobre cada livro.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| isbn       | identificador único de livros | BIGINT      | -           | -        | Não  |
| título     | nomes dos livros           | VARCHAR(50)        | -       | -        | Não  |
| autor     | nome dos criadores dos livros           | VARCHAR(50) | -           | -        | Não  |
| editora     | que empresa editorial fez o livro           | VARCHAR(50) | -           | -        | Não  |
| ano de publicação     | o ano em que o livro foi lançado           | INT | -           | -        | Não  |
| preço     | preço de cada livro           | DECIMAL(5.2) | -           | -        | Não  |
| categoria     | a que género de literatura o livro pertence           | VARCHAR(50) | -           | -        | Não  |


### Relações N:M
### Tabela da relação - Tem

#### DESCRIÇÃO:
A tabela tem foi criada através da relação N:M entre LOJA e LIVRO e quantidade.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idLoja       | identificador de cada loja | INT      | -           | -        | Não  |
| isbn     | identificador único de livros           | INT        | -       | -        | Não  |
| quantidade     | quantidade do stock de livros por loja           | INT | -           | -        | Não  |


### Tabela da relação - AplicadoEm

#### DESCRIÇÃO:
A tabela tem informação sobre que descontos foram aplicados em cada loja.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| percentagem       | percentagem do desconto | DECIMAL      | -           | -        | Não  |
| idLoja     | identificador de cada loja           | INT        | -       | -        | Não  |

[< Previous](REBD03.md) | [^ Main](/../../) | [Next >](REBD05.md)
:--- | :---: | ---: 
