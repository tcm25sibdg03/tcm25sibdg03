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
  'tipo' VARCHAR(50) DEFAULT 'presencial' NOT NULL CHECK (tipo = 'online' OR tipo = 'presencial'),
  'data' DATE NOT NULL,
  'valorTotal' DECIMAL NOT NULL CHECK ('valorTotal' > 0),
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
  'valorTotal' DECIMAL NOT NULL CHECK ('valorTotal' > 0),
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

INSERT INTO 'livro' ('isbn', 'titulo', 'autor', 'editora', 'anoDePublicacao', 'preco', 'categoria') VALUES
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


INSERT INTO 'loja' ('idLoja', 'cidade', 'rua') VALUES
(1, 'Aveiro', 'R. dos Combatentes da Grande Guerra'),
(2, 'Braga', 'Av. da Liberdade'),
(3, 'Coimbra', 'R. Ferreira Borges'),
(4, 'Lisboa', 'R. Garrett'),
(5, 'Porto', 'Av. da Boavista');


INSERT INTO "cliente" ("numero", "nome", "contacto") VALUES
(11111111, 'Maria Santos', 919999999),
(22222222, 'Carlos Gomes', 912345678),
(33333333, 'Sara Silva', 919876543),
(44444444, 'Maria Moreira', 916345748),
(55555555, 'João Ferreira', 913456789),
(66666666, 'Ana Costa', 914567890),
(77777777, 'Pedro Almeida', 915678901),
(88888888, 'Rita Oliveira', 916789012),
(99999999, 'Tiago Sousa', 917890123),
(10101010, 'Carla Martins', 918901234),
(12121212, 'Bruno Pereira', 919012345),
(13131313, 'Sofia Rodrigues', 912111222),
(14141414, 'Miguel Lopes', 913222333),
(15151515, 'Inês Carvalho', 914333444),
(16161616, 'André Teixeira', 915444555),
(17171717, 'Patrícia Mendes', 916555666),
(18181818, 'Ricardo Nunes', 917666777),
(19191919, 'Daniela Rocha', 918777888),
(20202020, 'Filipe Correia', 919888999),
(21212121, 'Helena Ramos', 912999000),
(23232323, 'Vasco Pinto', 913101010),
(24242424, 'Cláudia Neves', 914202020),
(25252525, 'Luís Faria', 915303030),
(26262626, 'Beatriz Melo', 916404040),
(27272727, 'Nuno Cardoso', 917505050),
(28282828, 'Teresa Cunha', 918606060),
(29292929, 'Paulo Ribeiro', 919707070),
(30303030, 'Cátia Gomes', 912808080),
(31313131, 'Marco Vieira', 913909090),
(32323232, 'Eva Monteiro', 914010101);


INSERT INTO "funcionario" ("codigo", "nome", "funcao") VALUES
(9733, 'Ana Santos', 'livreiro'),
(1234, 'José Santos', 'livreiro'),
(3799, 'Rita Torres', 'livreiro'),
(4321, 'Hugo Gomes', 'livreiro'),
(5876, 'Marco Silva', 'livreiro'),
(2644, 'Tiago Santos', 'operador de caixa'),
(4566, 'Catarina Santos', 'operador de caixa'),
(6789, 'Tiago Ferreira', 'operador de caixa'),
(1880, 'Pedro Silva', 'operador de caixa'),
(2134, 'Pedro Santos', 'operador de caixa');
(7011, 'Lucas Martins', 'repositor'),
(7012, 'Mariana Costa', 'repositor'),
(7013, 'Diogo Almeida', 'repositor'),
(7014, 'Filipa Sousa', 'repositor'),
(7015, 'Renato Oliveira', 'repositor');


INSERT INTO "desconto" ("percentagem", "dataInicio", "dataFim") VALUES
(5,  '2026-01-01', '2026-01-15'),
(10, '2026-02-01', '2026-02-14'),
(15, '2026-03-01', '2026-03-20'),
(20, '2026-04-01', '2026-04-30'),
(25, '2026-05-01', '2026-05-31');


INSERT INTO "compra" ("idCompra", "tipo", "data", "valorTotal", "numeroCliente", "codigoFuncionario") VALUES
(1, 'presencial', '2026-05-10', 39.35, 11111111, 2644),
(2, 'online', '2026-05-11', 24.90, 22222222, 4566),
(3, 'presencial', '2026-05-12', 18.90, 33333333, 1880),
(4, 'online', '2026-05-13', 52.80, 44444444, 6789),
(5, 'presencial', '2026-05-14', 14.90, 55555555, 2134),
(6, 'online', '2026-05-15', 22.00, 66666666, 2644),
(7, 'presencial', '2026-05-16', 45.80, 77777777, 4566),
(8, 'online', '2026-05-17', 19.45, 88888888, 1880),
(9, 'presencial', '2026-05-18', 28.71, 99999999, 6789),
(10, 'online', '2026-05-19', 35.13, 10101010, 2134),
(11, 'presencial', '2026-05-20', 16.73, 12121212, 2644),
(12, 'online', '2026-05-21', 24.90, 13131313, 4566),
(13, 'presencial', '2026-05-22', 20.93, 14141414, 1880),
(14, 'online', '2026-05-23', 18.90, 15151515, 6789),
(15, 'presencial', '2026-05-24', 52.88, 16161616, 2134);


INSERT INTO "endereco" ("idEncomenda", "codigoPostal", "localidade", "rua", "numero", "idCompra") VALUES
(1, '1000-001', 'Lisboa', 'Rua Augusta', 15, 2),
(2, '4700-100', 'Braga', 'Avenida Central', 22, 4),
(3, '4000-200', 'Porto', 'Rua de Santa Catarina', 103, 6),
(4, '3000-300', 'Coimbra', 'Rua Ferreira Borges', 45, 8),
(5, '3800-400', 'Aveiro', 'Rua Direita', 78, 10),
(6, '5000-500', 'Vila Real', 'Rua das Flores', 12, 12),
(7, '7000-600', 'Évora', 'Rua da República', 9, 14);




```

[< Previous](REBD04.md) | [^ Main](/../../) | Next >
:--- | :---: | ---: 
