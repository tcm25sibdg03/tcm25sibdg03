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



### Tabela - DESCONTO
#### DESCRIÇÃO:
Esta tabela é onde se pode encontrar ainda mais informação sobre os descontos aplicados em cada loja.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| percentagem       | percentagem do desconto aplicado | INT      | -           | Não        | Não  |
| datainicio     | data de inicio do desconto           | DATE        | -       | Não        | Não  |
| datafim     | data de fim do desconto           | DATE | -           | Não        | Não  |
* Chave primária: percentagem
* Atributos (check): CHECK (percentagem > 0 AND percentagem < 50)


### Tabelas de Relações

### Relações 1:N

### Tabela - COMPRA
#### DESCRIÇÃO:
Esta tabela é onde se pode encontrar ainda mais informação sobre cada compra.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idcompra       | identificador único de compras | INT      | -           | Não        | Não  |
| tipo     | se é presencial ou online           | VARCHAR(50)        | DEFAULT 'presencial'       | Não        | Não  |
| data     | ndata da compra           | DATE | -           | Não        | Não  |
| valortotal     | valor total da compra           | DECIMAL(6.2) | -           | Não        | Não  |
| numerocliente     | numero de cliente           | INT | -           | Não        | Não  |
| codigofuncionario     | codigo de funcionario           | INT | -           | Não        | Não  |
* Chave primária: idcompra
* Referêncial: numerocliente - cliente / codigofuncionario - funcionario
* Atributos (check): CHECK (tipo = 'online' OR tipo = 'presencial' / CHECK (valortotal > 0)



### Relações 1:1

### Tabela - ENDERECO
#### DESCRIÇÃO:
Esta tabela é onde se pode encontrar ainda mais informação sobre as encomendas.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idencomenda       | identificador único de encomenda enviada para o endereço | INT      | -           | Não        | Não  |
| codigopostal     | codigo postal do endereço           | INT        | -       | Não        | Não  |
| localidade     | localidade do endereço           | VARCHAR(50) | -           | Não        | Não  |
| rua     | rua de endereço           | VARCHAR(50) | -           | Não        | Não  |
| numero     | numero da porta do endereço          | INT | -           | Não        | Não  |
| idcompra    | identificador da compra associada ao endereço           | INT | -           | Não        | Não  |
* Chave primária: idencomenda
* Referêncial: idcompra - compra


### Relações N:M
### Tabela - Tem
#### DESCRIÇÃO:
A tabela tem foi criada através da relação N:M entre LOJA e LIVRO e quantidade. Aqui é possível descobrir quantos livros tem em cada loja.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| idLoja       | identificador de cada loja | INT      | -           | -        | Não  |
| isbn     | identificador único de livros           | BIGINT        | -       | -        | Não  |
| quantidade     | quantidade do stock de livros por loja           | INT | -           | -        | Não  |
* Chave primária: idloja / isbnlivro
* Referêncial: idloja - loja / isbnlivro - livro


### Tabela - AplicadoEm
#### DESCRIÇÃO:
A tabela tem foi criada através da relação N:M entre DESCONTO e LOJA. Aqui é possível descobrir que descontos foram aplicados em cada loja.

| Atributo     | Descrição                 | Domínio     | por Omissão | Automático | Nulo |
| :------- | :------------------------ | :---------- | :---------- | :--------- | :--- |
| percentagem       | percentagem do desconto | INT      | -           | -        | Não  |
| idLoja     | identificador de cada loja           | INT        | -       | -        | Não  |
* Chave primária:
* Referêncial:
* Atributos (check):



### Tabela - Inclui
#### DESCRIÇÃO:
A tabela tem foi criada através da relação N:M entre LOJA e LIVRO e quantidade. Aqui é possível descobrir quantos livros tem em cada loja.


[< Previous](REBD03.md) | [^ Main](/../../) | [Next >](REBD05.md)
:--- | :---: | ---: 
