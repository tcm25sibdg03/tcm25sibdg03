# Relatório de Especificação da Informação  

## Descrição do trabalho:  
Este trabalho consiste no desenvolvimento de um sistema para uma organização composta por várias lojas de livros, com o objetivo principal de permitir a pesquisa online de livros e a consulta de informações relevantes, como a disponibilidade em stock e os descontos associados a cada loja.
O sistema deverá permitir aos utilizadores pesquisar livros de forma simples e eficiente, utilizando critérios como o título, autor ou categoria. Para além disso, será possível consultar em que lojas um determinado livro se encontra disponível, bem como verificar a quantidade existente em stock em cada localização. Esta funcionalidade é essencial, uma vez que cada loja possui o seu próprio inventário, podendo haver diferenças na disponibilidade entre elas.
Outro aspeto importante do sistema é a apresentação de descontos aplicados aos livros em cada loja. Esta funcionalidade permite aos clientes tomar decisões de compra mais informadas, comparando preços e promoções entre diferentes localizações. Assim, o sistema não só facilita o acesso à informação, como também melhora a experiência de compra.
Além da componente de pesquisa e consulta, o sistema deverá suportar o registo de compras. Cada compra poderá incluir vários livros e deverá ser registada com informação relevante, como a data e o valor total da transação. Este processo deve ser realizado de forma consistente, garantindo que apenas livros disponíveis em stock possam ser vendidos, evitando erros e assegurando a fiabilidade dos dados.
O sistema também deverá incluir funcionalidades de gestão de clientes, permitindo o registo de novos clientes, bem como a atualização e consulta dos seus dados. Esta componente é importante para manter um histórico de compras e possibilitar uma melhor organização da informação associada a cada utilizador.
De forma geral, este sistema pretende melhorar a organização e eficiência de uma cadeia de livrarias.  

## Modelação do Problema:  
Desenvolver um serviço para clientes conseguirem pesquisar, online, por livros e saber o stock descontos de cada loja.
Cada loja tem a sua própria localização e o seu próprio stock de livros e descontos.
Cada livro possui um título, autor, editora, ano de publicação, categoria, preço e ISBN.
Cada cliente é identificado por um número, contacto e nome, podendo efetuar várias compras ao longo do tempo.
Cada venda pode incluir vários livros, registando a data da venda e o valor total da transação.
Os funcionários estão responsáveis pela gestão da loja e pelas vendas, e são identificados por nome, código e função.
Não é possível vender um livro que não esteja disponível em stock.  

## Funcionalidades:  
* Pesquisa e gestão de livros online
* Ver stock por loja
* Ver descontos por loja
* Registar compras
* Gestão de clientes

