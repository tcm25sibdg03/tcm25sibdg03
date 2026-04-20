# Relatório de Especificação da Base de Dados

## Descrição do trabalho:  
???

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

## Modelo E/A:  

![Diagrama](Diagrama_LIVRARIA.jpeg)
