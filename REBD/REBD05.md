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

CREATE TABLE IF NOT EXISTS 'realiza' (
  'idLoja' INT NOT NULL,
  'idCompra' INT NOT NULL,
  PRIMARY KEY ('idLoja', 'idCompra'),
  FOREIGN KEY ('idLoja')
    REFERENCES 'loja'('idLoja'),
  FOREIGN KEY ('idCompra')
    REFERENCES 'compra'('idCompra')
);

START TRANSACTION;

INSERT INTO livro (isbn, titulo, autor, editora, anoDePublicacao, preco, categoria) VALUES
('9789895701124', 'A criada', 'Freida McFadden', 'Alma dos Livros', 2023, 19.45, 'Drama'),
('9789895702756', 'A criada está a ver', 'Freida McFadden', 'Alma dos Livros', 2023, 19.45, 'Drama'),
('9789892367118', 'A espada de Kaigen', 'M.L Wang', 'Asa', 2026, 28.71, 'Fantasia'),
('9789898860811', 'A guerra das papoilas', 'R.F Kuang', 'Desrotina', 2023, 19.42, 'Fantasia'),
('9789722372800', 'A história Secreta', 'Donna Tartt', 'Presença', 2024, 24.90, 'Suspense'),
('9789722378291', 'Alvorada Vermelha', 'Pierce Brown', 'Presença', 2026, 20.90, 'Ficção-Científica'),
('9789895772759', 'A Deusa Ardente', 'R.F Kuang', 'Desrotina', 2024, 24.90, 'Fantasia'),
('9789726083795', 'A quinta dos animais', 'George Orwell', 'Antígona', 2020, 12.00, 'Ficção'),
('9789895771011', 'A República do Dragão', 'R.F Kuang', 'Desrotina', 2024, 24.90, 'Fantasia'),
('9789892342795', 'As vantagens de ser invisível', 'Stephen Chbosky', 'Lua de Papel', 2018, 15.50, 'Drama'),
('9789899150331', 'Babel', 'R.F Kuang', 'Desrotina', 2023, 16.73, 'Fantasia'),
('9789892326313', 'Drácula', 'Bram Stoker', 'Asa', 2025, 14.90, 'Literatura Clássica'),
('9789895760404', 'Frankenstein', 'Mary Shelley', 'Guerra e Paz', 2024, 14.90, 'Literatura Clássica'),
('9789896619183', 'In memoriam', 'Alice Winn', 'Casa das Letras', 2024, 21.90, 'Romance'),
('9789722548410', 'Metamorfose', 'Franz Kafka', 'Bertrand', 2024, 13.30, 'Literatura Clássica'),
('9789895703760', 'O casamento da criada', 'Freida McFadden', 'Alma dos Livros', 2025, 9.95, 'Drama'),
('9789896417482', 'O conde de monte cristo', 'Alexandre Dumas', 'Relógio d''Água', 2017, 35.13, 'Literatura Clássica'),
('9788466358446', 'O diário de Anne Frank', 'Anne Frank', 'Relógio d''Água', 2016, 14.90, 'Literatura Clássica'),
('9789896378400', 'O herói das eras', 'Brandon Sanderson', 'Saída de Emergência', 2015, 18.90, 'Fantasia'),
('9789896379285', 'O herói das eras – parte dois', 'Brandon Sanderson', 'Saída de Emergência', 2016, 17.76, 'Fantasia'),
('9789896376383', 'O Império Final', 'Brandon Sanderson', 'Saída de Emergência', 2014, 22.00, 'Fantasia'),
('9789722360920', 'O ódio que semeias', 'Angie Thomas', 'Presença', 2017, 18.90, 'Drama'),
('9789722532099', 'O rouxinol', 'Kristin Hannah', 'Bertrand', 2016, 19.90, 'Drama'),
('9789895701551', 'O segredo da criada', 'Freida McFadden', 'Alma dos Livros', 2023, 19.45, 'Drama'),
('9789722047975', 'O senhor das Moscas', 'William Golding', 'Dom Quixote', 2011, 16.92, 'Literatura Clássica'),
('9789722369954', 'O tatuador de Auschwitz', 'Heather Morris', 'Presença', 2022, 19.90, 'Drama'),
('9789896377175', 'O poço da ascensão', 'Brandon Sanderson', 'Saída de Emergência', 2015, 26.98, 'Fantasia'),
('9789895770274', 'O priorado da laranjeira', 'Samantha Shannon', 'Desrotina', 2023, 25.90, 'Fantasia'),
('9789897833199', 'Pachinko', 'Min Jin Lee', 'Relógio d''Água', 2023, 22.00, 'Drama'),
('9789722370158', 'Uma pequena vida', 'Hanya Yanagihara', 'Presença', 2022, 20.93, 'Drama');


INSERT INTO loja (idLoja, cidade, rua) VALUES
(1, 'Aveiro', 'R. dos Combatentes da Grande Guerra'),
(2, 'Braga', 'Av. da Liberdade'),
(3, 'Coimbra', 'R. Ferreira Borges'),
(4, 'Lisboa', 'R. Garrett'),
(5, 'Porto', 'Av. da Boavista');





```

[< Previous](REBD04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
