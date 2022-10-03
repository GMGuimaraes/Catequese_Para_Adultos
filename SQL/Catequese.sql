DROP SCHEMA IF EXISTS Catequese ;

CREATE SCHEMA IF NOT EXISTS Catequese;
USE Catequese;


DROP TABLE IF EXISTS Turma ;

CREATE TABLE IF NOT EXISTS Turma (
  idTurma INT PRIMARY KEY,
  DataInicio DATE,
  DataFim DATE
);


DROP TABLE IF EXISTS Catequese_Adultos;

CREATE TABLE IF NOT EXISTS Catequese_Adultos (
  idCatequeseAdultos INT PRIMARY KEY,
  idTurma INT,
  CONSTRAINT Turma_Catequese_idTurma FOREIGN KEY (idTurma) REFERENCES Catequese.Turma (idTurma)
);


DROP TABLE IF EXISTS Pessoa;

CREATE TABLE IF NOT EXISTS Pessoa (
  CPF INT PRIMARY KEY,
  Nome VARCHAR(45),
  RG BOOLEAN,
  ComprovanteResidencia BOOLEAN,
  CasadoA BOOLEAN,
  Idade INT
);


DROP TABLE IF EXISTS Sacramento;

CREATE TABLE IF NOT EXISTS Sacramento (
  idSacramento INT PRIMARY KEY,
  CPF INT,
  idTurma INT,
  DataInicioCiclo DATE,
  DataFimCiclo DATE,
  DataMissa DATE,
  CONSTRAINT Pessoa_Sacramento_CPF FOREIGN KEY (CPF) REFERENCES Catequese.Pessoa (CPF),
  CONSTRAINT Turma_Sacramento_idTurma FOREIGN KEY (idTurma) REFERENCES Catequese.Turma (idTurma)
);


DROP TABLE IF EXISTS PadrinhoMadrinha ;

CREATE TABLE IF NOT EXISTS PadrinhoMadrinha (
  CPF INT PRIMARY KEY,
  ComprovanteBatismoAdmissao BOOLEAN,
  ComprovantePrimeiraEucaristia BOOLEAN,
  ComprovanteCrisma BOOLEAN,
  ComprovanteCasamento BOOLEAN,
  CONSTRAINT Pessoa_PardinhoMadrinha_CPF FOREIGN KEY (CPF)REFERENCES Catequese.Pessoa (CPF)
);


DROP TABLE IF EXISTS Batismo ;

CREATE TABLE IF NOT EXISTS Batismo (
  idSacramento INT PRIMARY KEY,
  PadrinhoMadrinha INT,
  CONSTRAINT Sacramento_Batismo_idSacramento FOREIGN KEY (idSacramento) REFERENCES Catequese.Sacramento (idSacramento),
  CONSTRAINT PadrinhoMadrinha_Batismo_CPF FOREIGN KEY (PadrinhoMadrinha) REFERENCES Catequese.PadrinhoMadrinha (CPF)
);


DROP TABLE IF EXISTS Admissao ;

CREATE TABLE IF NOT EXISTS Admissao (
  idSacramento INT PRIMARY KEY,
  ReligiaoOrigem VARCHAR(45),
  DataOrigem VARCHAR(45),
  CONSTRAINT Sacramento_Admissao_idSacramento FOREIGN KEY (idSacramento) REFERENCES Catequese.Sacramento (idSacramento)
);


DROP TABLE IF EXISTS PrimeiraEucaristia ;

CREATE TABLE IF NOT EXISTS PrimeiraEucaristia (
  idSacramento INT PRIMARY KEY,
  ComprovanteBatismoAdmissao BOOLEAN,
  ComprovanteCasamento BOOLEAN,
  PrimeiraEucaristia VARCHAR(45),
  CONSTRAINT Sacramento_PrimeiraEucaristia_idSacramento FOREIGN KEY (idSacramento) REFERENCES Catequese.Sacramento (idSacramento)
);


DROP TABLE IF EXISTS Crisma ;

CREATE TABLE IF NOT EXISTS Crisma (
  idSacramento INT PRIMARY KEY,
  ComprovanteBatismoAdmissao BOOLEAN,
  ComprovantePrimeiraEucaristia BOOLEAN,
  PadrinhoMadrinha INT,
  CONSTRAINT Sacramento_Crisma_idSacramento FOREIGN KEY (idSacramento) REFERENCES Catequese.Sacramento (idSacramento),
  CONSTRAINT PadrinhoMadrinha_Crisma_CPF FOREIGN KEY (PadrinhoMadrinha) REFERENCES Catequese.PadrinhoMadrinha (CPF)
);