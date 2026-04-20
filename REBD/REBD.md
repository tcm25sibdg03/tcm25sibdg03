# Relatório de Especificação da Base de Dados

**Grupo tcm25sibdg03:**  
A047345 - Joana Ambrósio  

## Descrição do trabalho:  
Este trabalho consiste no desenvolvimento de um sistema destinado a uma organização composta por várias livrarias. O principal objetivo é permitir aos clientes pesquisar livros online e consultar informações relevantes, como a disponibilidade em stock e os descontos praticados em cada loja.  
Cada loja possui uma localização própria, bem como um stock independente de livros e políticas de desconto específicas.  
Relativamente aos livros, cada um é caracterizado por um conjunto de atributos: título, autor, editora, ano de publicação, categoria, preço e ISBN.  
Os clientes são identificados por um número único, nome e contacto, podendo realizar múltiplas compras ao longo do tempo.  
Cada venda pode incluir vários livros, sendo registada com a respetiva data e o valor total da transação.  
Os funcionários são responsáveis pela gestão das lojas e pela realização das vendas, sendo identificados por nome, código e função.  
Importa ainda garantir que não é possível efetuar a venda de um livro que não se encontre disponível em stock.  

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
