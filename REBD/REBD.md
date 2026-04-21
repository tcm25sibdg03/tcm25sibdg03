# Relatório de Especificação da Base de Dados

**Grupo tcm25sibdg03:**  
A047345 - Joana Ambrósio  

## Descrição do trabalho:  
Este trabalho consiste no desenvolvimento de um sistema destinado a uma organização composta por várias livrarias. O principal objetivo é permitir aos clientes pesquisar livros online e consultar informações relevantes, como a disponibilidade em stock e os descontos praticados em cada loja.  
Cada loja tem a sua própria localização, decomposta em cidade e rua e cada loja tem o seu próprio stock de livros e descontos.  
Cada livro possui um ISBN, título, autor, editora, ano de publicação, categoria e preço.  
Cada cliente é identificado por um número, contacto e nome, podendo efetuar várias compras ao longo do tempo ou até ao mesmo tempo.  
Cada compra pode incluir vários livros, registando a data da venda e o valor total da transação.  
Os funcionários estão responsáveis pela gestão da loja e pelas compras, e são identificados por nome, código e função.  
Não é possível commprar um livro que não esteja disponível em stock.   

## Descrição dos requisitos do utilizador:  

**Funcionalidades:**  
* Pesquisa e gestão de livros online
* Ver stock por loja
* Ver descontos por loja
* Registar compras
* Gestão de clientes

**Entidades (atores):**  
LOJA (localizacao)  
LIVRO (titulo, autor, editora, anoDePublicacao, preco, categoria, _ISBN_)  
CLIENTE (_numero_, contacto, nome)  
FUNCIONÁRIOS (nome, _código_, funcao)  
VENDA (data, valorTotal)  

**Associações e Restrições:**  
Tem, quantidade, desconto(LOJA, LIVRO) N:M parcial/total  
Inclui, quantidade(VENDA, LIVRO) N:M total/parcial  
Efetua (CLIENTE, VENDA) 1:N parcial/total  
Regista (FUNCIONARIO, VENDA) 1:N parcial/total  
Realiza (LOJA, VENDA) 1:N parcial/total  


< Previous | [^ Main](/../../) | [Next >](REBD02.md)
:--- | :---: | ---: 
