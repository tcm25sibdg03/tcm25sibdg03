# Relatório de Especificação da Base de Dados

## Descrição do trabalho:  
???

## Descrição dos requisitos do utilizador:  

**Funcionalidades:**  
**Pesquisa de livros:**  
* Pesquisa por título, autor ou categoria  
* Interface simples e eficiente para localização de livros

**Consulta de disponibilidade:**  
* Verificação de em que lojas um livro está disponível  
* Consulta da quantidade de stock em cada loja  
* Comparação de disponibilidade entre diferentes localizações
  
**Gestão de descontos:**  
* Visualização de promoções aplicadas a livros
* Comparação de preços entre lojas
* Apoio à decisão de compra com base em descontos
  
**Registo de compras:**  
* Registo de transações com múltiplos livros  
* Associação de data e valor total da compra  
* Validação de stock antes da venda
  
**Gestão de clientes:**  
* Registo de novos clientes   
* Atualização de dados de clientes  
* Consulta de informação e histórico de compras
  
**Gestão de stock:**  
* Controlo de inventário por loja  
* Atualização de stock após compras  
* Garantia de consistência dos dados  

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
