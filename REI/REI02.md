# Relatório de Especificação da Informação

## Funcionalidades:  
* Pesquisa e gestão de livros online
* Ver stock por loja
* Ver descontos por loja
* Registar compras
* Gestão de clientes

## Entidades:
LOJA (localizacao)  
LIVRO (titulo, autor, editora, anoDePublicacao, preco, categoria, ISBN)  
CLIENTE (numero, contacto, nome)  
FUNCIONÁRIOS (nome, código, funcao)  
VENDA (data, valorTotal)  

## Associações e Restrições:  
Tem (LOJA, LIVRO, quantidade) N:M parcial/total  
AplicaDescontos (LOJA, LIVRO, percentagem, dataInicio, dataFim) N:M total/parcial  
Inclui (COMPRA, LIVRO, quantidade, preço) N:M total/parcial  
Efetua (CLIENTE, COMPRA) 1:N parcial/total  
Regista (FUNCIONARIO, COMPRA) 1:N parcial/total  
Realiza (LOJA, COMPRA) N:M parcial/total



[< Previous](REI.md) | [^ Main](/../../) | [Next >](REI03.md)
:--- | :---: | ---: 
