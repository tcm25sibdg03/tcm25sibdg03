# Relatório de Especificação da Base de Dados

## Esquema Relacional:

### Tabelas de Entidades
### Tabela - LIVRO
#### DESCRIÇÃO:
Esta tabela é onde se pode encontrar ainda mais informação sobre cada livro.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| isbn       | identificador único de livros | BIGINT      | -           | Não        | Não  |
| título     | nomes dos livros           | VARCHAR(50)        | -       | Não        | Não  |
| autor     | nome dos criadores dos livros           | VARCHAR(50) | -           | Não        | Não  |
| editora     | que empresa editorial fez o livro           | VARCHAR(50) | -           | Não        | Não  |
| ano de publicação     | o ano em que o livro foi lançado           | INT | -           | Não        | Não  |
| preço     | preço de cada livro           | DECIMAL(5.2) | -           | Não        | Não  |
| categoria     | a que género de literatura o livro pertence           | VARCHAR(50) | -           | Não        | Não  |  
* Chave primária: isbn
* Atributos (check): CHECK (preco > 0)


### Tabela - LOJA
#### DESCRIÇÃO:
Esta tabela é onde se pode encontrar ainda mais informação sobre cada loja.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idloja       | identificador único das lojas | INT      | -           | Não        | Não  |
| cidade     | nome da cidade           | VARCHAR(50)        | -       | Não        | Não  |
| rua     | nome da rua           | VARCHAR(50) | -           | Não        | Não  |
* Chave primária: idloja



### Tabela - CIENTE
#### DESCRIÇÃO:
Esta tabela é onde se pode encontrar ainda mais informação sobre os clientes.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| numero       | numero de cliente | INT      | -           | Não        | Não  |
| nome     | nome de cliente           | VARCHAR(50)        | -       | Não        | Não  |
| contacto     | contacto dos clientes           | INT | -           | Não        | Não  |
* Chave primária: numero
* Unicidade (valores únicos): contacto



### Tabela - FUNCIONARIO
#### DESCRIÇÃO:
Esta tabela é onde se pode encontrar ainda mais informação sobre os funcionarios das livrarias.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| codigo       | numero de cliente | INT      | -           | Não        | Não  |
| nome     | nomes dos funcionarios           | VARCHAR(50)        | -       | Não        | Não  |
| funcao     | função que cada funcionario desempenha           | VARCHAR(50) | -           | Não        | Não  |
* Chave primária: codigo


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
