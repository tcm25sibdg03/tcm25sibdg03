# Relatório de Especificação da Base de Dados

**Grupo tcm25sibdg03:**  
A047345 - Joana Ambrósio  

## Descrição do trabalho:  
Este trabalho consiste no desenvolvimento de um sistema destinado a uma organização composta por várias livrarias. O principal objetivo é permitir aos clientes pesquisar livros online e consultar informações relevantes, como a disponibilidade em stock e os descontos presentes em cada loja.  
Cada loja tem um identificador próprio e a sua localização, decomposta em cidade e rua e cada uma tem o seu próprio stock de livros e descontos.  
Cada livro possui um ISBN, título, autor, editora, ano de publicação, categoria e preço.  
Cada cliente é identificado por um número, contacto e nome, podendo efetuar várias compras ao longo do tempo ou até ao mesmo tempo.  
Os funcionários são responsáveis pela gestão da loja e as compras e são identificados por código, nome e função.  
Compras podem ser presenciais ou online. Cada compra tem de incluir pelo menos um livro mas pode incluir vários de uma só vez.  
Numa compra fica registado um identificador próprio, data e o seu valor total.  
Não é possível comprar um livro que não esteja em stock.  

## Descrição dos requisitos do utilizador:  

**Funcionalidades:**  
* Pesquisa e gestão de livros online
* Ver stock por loja
* Ver descontos por loja
* Registar compras
* Gestão de clientes

**Entidades (atores):**  
LOJA (id, localizacao(cidade,rua)  
LIVRO (ISBN, titulo, autor, editora, anoDePublicacao, preco, categoria)  
CLIENTE (numero, contacto, nome)  
FUNCIONÁRIOS (código, nome, função)  
COMPRA (id, tipo, data, valorTotal)   
ENDEREÇO (morada (código_postal, localidade, rua, numero)  
DESCONTO (percentagem, data_inicio, data_fim)

**Associações e Restrições:**  
Tem (LOJA, LIVRO, quantidade) N:M parcial/total  
Aplicado (DESCONTO, LOJA) N:M parcial/parcial  
Inclui (COMPRA, LIVRO, quantidade, preço, valorTotal, percentagem) N:M total/parcial  
Entrega (COMPRA, ENDEREÇO) 1:1 parcial/total  
Efetua (CLIENTE, COMPRA) 1:N parcial/total  
Regista (FUNCIONARIO, COMPRA) 1:N parcial/total  
Realiza (LOJA, COMPRA) N:M parcial/total  


< Previous | [^ Main](/../../) | [Next >](REBD02.md)
:--- | :---: | ---: 
