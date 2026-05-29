# Relatório de Especificação da Base de Dados

## Do Modelo EA a Relação:

**Tem**

| #idLoja → loja | #isbn → livro | quantidade |
|---|---|---|


**aplicadoEm**

| #percentagem → desconto | #idLoja → loja |
|---|---|


**Inclui**

| #idLoja → loja | #idLoja → loja | quantidade | preço | percentagem | valorTotal |
|---|---|---|---|---|---|


**Realiza**

| #idLoja → loja | #idCompra → compra |
|---|---|


**Cliente**

| numero | nome | contacto | #id → compra |
|---|---|---|---|


**Funcionario**

| codigo | nome | funcao | #id → compra |
|---|---|---|---|


**Endereço**

| idEncomenda | codigoPostal | localidade | rua | numero | #id → compra |
|---|---|---|---|---|---|



[< Previous](REBD02.md) | [^ Main](/../../) | [Next >](REBD04.md)
:--- | :---: | ---: 

