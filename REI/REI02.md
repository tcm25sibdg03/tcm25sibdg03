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
Tem (LOJA, LIVRO, quantidade, desconto) N:M parcial/total  
Inclui (VENDA, LIVRO, quantidade) N:M total/parcial  
Efetua (CLIENTE, VENDA) 1:N parcial/total  
Regista (FUNCIONARIO, VENDA) 1:N parcial/total  
Realiza (LOJA, VENDA) 1:N parcial/total  



[< Previous](REI.md) | [^ Main](/../../) | [Next >](REI03.md)
:--- | :---: | ---: 
