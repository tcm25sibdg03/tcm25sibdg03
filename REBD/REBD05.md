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
  'tipo' VARCHAR(50) NOT NULL,
  'data' DATE NOT NULL,
  'valorTotal' DECIMAL NOT NULL,
  'numeroCliente' INT NOT NULL,
  'codigoFuncionario' INT NOT NULL,
  PRIMARY KEY ('percentagem')
  FOREIGN KEY (numeroCliente)
    REFERENCES cliente(numero),
  FOREIGN KEY (codigoFuncionario)
    REFERENCES funcionario(codigo),
CHECK (tipo = 'online' OR tipo = 'presencial')
);


```

[< Previous](REBD04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
