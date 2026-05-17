# Relatório de Especificação da Base de Dados

## SQL/DDL:

```sql
USE `livraria`;

DROP TABLE IF EXISTS 'livro';
DROP TABLE IF EXISTS 'loja';
DROP TABLE IF EXISTS 'cliente';
DROP TABLE IF EXISTS 'funcionario';
DROP TABLE IF EXISTS 'desconto';
DROP TABLE IF EXISTS 'compra';
DROP TABLE IF EXISTS 'endereco';
DROP TABLE IF EXISTS 'tem';
DROP TABLE IF EXISTS 'aplicadoEm';
DROP TABLE IF EXISTS 'inclui';
DROP TABLE IF EXISTS 'realiza';

CREATE TABLE IF NOT EXISTS 'livro' (
  'isbn' CHAR(13) NOT NULL,
  'titulo' VARCHAR(50) NOT NULL,
  'autor' VARCHAR(50) NOT NULL,
  'editora' VARCHAR(50) NOT NULL,
  'anoDePublicacao' INT NOT NULL,
  'preco' DECIMAL NOT NULL CHECK ('preco' > 0),
  'categoria' VARCHAR(50) NOT NULL,
  PRIMARY KEY ('isbn')
);

CREATE TABLE IF NOT EXISTS 'loja' (
  'idLoja' INT NOT NULL,
  'cidade' VARCHAR(50) NOT NULL,
  'rua' VARCHAR(50) NOT NULL,
  PRIMARY KEY ('idLoja')
);

CREATE TABLE IF NOT EXISTS 'cliente' (
  'numero' INT NOT NULL,
  'nome' VARCHAR(50) NOT NULL,
  'contacto' CHAR(9) NOT NULL UNIQUE,
  PRIMARY KEY ('numero')
);

CREATE TABLE IF NOT EXISTS 'funcionario' (
  'codigo' INT NOT NULL,
  'nome' VARCHAR(50) NOT NULL,
  'funcao' VARCHAR(50) NOT NULL,
  PRIMARY KEY ('codigo')
);

CREATE TABLE IF NOT EXISTS 'desconto' (
  'percentagem' INT NOT NULL CHECK ('percentagem' > 0 AND 'percentagem' < 50),
  'dataInicio' DATE NOT NULL,
  'dataFim' DATE NOT NULL,
  PRIMARY KEY ('percentagem')
);

CREATE TABLE IF NOT EXISTS 'compra' (
  'idCompra' INT NOT NULL,
  'tipo' VARCHAR(50) NOT NULL CHECK (tipo = 'online' OR tipo = 'presencial'),
  'data' DATE NOT NULL,
  'valorTotal' DECIMAL NOT NULL CHECK (valorTotal > 0),
  'numeroCliente' INT NOT NULL,
  'codigoFuncionario' INT NOT NULL,
  PRIMARY KEY ('idCompra')
  FOREIGN KEY ('numeroCliente')
    REFERENCES 'cliente'('numero'),
  FOREIGN KEY ('codigoFuncionario')
    REFERENCES 'funcionario'('codigo'),
);

CREATE TABLE IF NOT EXISTS 'endereco' (
  'idEncomenda' INT NOT NULL,
  'codigoPostal' CHAR(7) NOT NULL,
  'localidade' VARCHAR(50) NOT NULL,
  'rua' VARCHAR(50) NOT NULL,
  'numero' INT NOT NULL,
  'idCompra' INT NOT NULL,
  PRIMARY KEY ('idEncomenda')
  FOREIGN KEY ('idCompra')
    REFERENCES 'compra'('idCompra'),
);

CREATE TABLE IF NOT EXISTS 'tem' (
  'idLoja' INT NOT NULL,
  'isbnLivro' CHAR(13) NOT NULL,
  'quantidade' INT NOT NULL,
  PRIMARY KEY ('idLoja', 'isbnLivro'),
  FOREIGN KEY ('idLoja')
    REFERENCES 'loja'('idLoja'),
  FOREIGN KEY ('isbnLivro')
    REFERENCES 'livro'('isbn')
);

CREATE TABLE IF NOT EXISTS 'aplicadoEm' (
  'percentagem' INT NOT NULL CHECK ('percentagem' > 0 AND 'percentagem' < 50),
  'idLoja' INT NOT NULL,
  PRIMARY KEY ('percentagem', 'idLoja'),
  FOREIGN KEY ('percentagem')
    REFERENCES 'desconto'('percentagem'),
  FOREIGN KEY ('idLoja')
    REFERENCES 'loja'('idLoja')
);

CREATE TABLE IF NOT EXISTS 'inclui' (
  'idCompra' INT NOT NULL,
  'isbnLivro' CHAR(13) NOT NULL,
  'quantidade' INT NOT NULL,
  'preco' DECIMAL NOT NULL CHECK ('preco' > 0),
  'percentagem' INT NOT NULL CHECK ('percentagem' > 0 AND 'percentagem' < 50),
  'valorTotal' DECIMAL(10,2) NOT NULL CHECK (valorTotal > 0),
  PRIMARY KEY ('idCompra', 'isbnLivro'),
  FOREIGN KEY ('idCompra')
    REFERENCES 'compra'('idCompra'),
  FOREIGN KEY ('isbnLivro')
    REFERENCES 'livro'('isbn')
);

CREATE TABLE IF NOT EXISTS realiza (
  idLoja INT NOT NULL,
  idCompra INT NOT NULL,
  PRIMARY KEY (idLoja, idCompra),
  FOREIGN KEY (idLoja)
    REFERENCES loja(idLoja),
  FOREIGN KEY (idCompra)
    REFERENCES compra(idCompra)
);


```

[< Previous](REBD04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
