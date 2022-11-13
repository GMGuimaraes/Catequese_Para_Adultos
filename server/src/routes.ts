import { Router } from "express";

import { CreateTurmaController } from "./controllers/Create/CreateTurmaController";
import { CreateCatequeseAdultosController } from "./controllers/Create/CreateCatequeseAdultosController";
import { CreatePessoaController } from "./controllers/Create/CreatePessoaController";
import { CreateUserController } from "./controllers/Create/CreateUserController";
import { CreateSacramentoController } from "./controllers/Create/CreateSacramentoController";
import { CreatePadrinhoMadrinhaController } from "./controllers/Create/CreatePadrinhoMadrinhaController";
import { CreateBatismoController } from "./controllers/Create/CreateBatismoController";
import { CreateAdmissaoController } from "./controllers/Create/CreateAdmissaoController";
import { CreateEucaristiaPrimeiraController } from "./controllers/Create/CreateEucaristiaPrimeiraController";
import { CreateCrismaController } from "./controllers/Create/CreateCrismaController";

import { DeleteTurmaController } from "./controllers/Delete/DeleteTurmaController";
import { DeleteCatequeseAdultosController } from "./controllers/Delete/DeleteCatequeseAdultosController";
import { DeletePessoaController } from "./controllers/Delete/DeletePessoaController";
import { DeleteUserController } from "./controllers/Delete/DeleteUserController";
import { DeleteSacramentoController } from "./controllers/Delete/DeleteSacramentoController";
import { DeletePadrinhoMadrinhaController } from "./controllers/Delete/DeletePadrinhoMadrinhaController";
import { DeleteBatismoController } from "./controllers/Delete/DeleteBatismoController";
import { DeleteAdmissaoController } from "./controllers/Delete/DeleteAdmissaoController";
import { DeleteEucaristiaPrimeiraController } from "./controllers/Delete/DeleteEucaristiaPrimeiraController";
import { DeleteCrismaController } from "./controllers/Delete/DeleteCrismaController";

import { ReadTurmaController } from "./controllers/FindMany/ReadTurmaController";
import { ReadCatequeseAdultosController } from "./controllers/FindMany/ReadCatequeseAdultosController";
import { ReadPessoaController } from "./controllers/FindMany/ReadPessoaController";
import { ReadUserController } from "./controllers/FindMany/ReadUserController";
import { ReadSacramentoController } from "./controllers/FindMany/ReadSacramentoController";
import { ReadPadrinhoMadrinhaController } from "./controllers/FindMany/ReadPadrinhoMadrinhaController";
import { ReadBatismoController } from "./controllers/FindMany/ReadBatismoController";
import { ReadAdmissaoController } from "./controllers/FindMany/ReadAdmissaoController";
import { ReadEucaristiaPrimeiraController } from "./controllers/FindMany/ReadEucaristiaPrimeiraController";
import { ReadCrismaController } from "./controllers/FindMany/ReadCrismaController";

import { FindTurmaController } from "./controllers/FindUnique/FindTurmaController";
import { FindCatequeseAdultosController } from "./controllers/FindUnique/FindCatequeseAdultosController";
import { FindPessoaController } from "./controllers/FindUnique/FindPessoaController";
import { FindUserController } from "./controllers/FindUnique/FindUserController";
import { FindSacramentoController } from "./controllers/FindUnique/FindSacramentoController";
import { FindPadrinhoMadrinhaController } from "./controllers/FindUnique/FindPadrinhoMadrinhaController";
import { FindBatismoController } from "./controllers/FindUnique/FindBatismoController";
import { FindAdmissaoController } from "./controllers/FindUnique/FindAdmissaoController";
import { FindEucaristiaPrimeiraController } from "./controllers/FindUnique/FindEucaristiaPrimeiraController";
import { FindCrismaController } from "./controllers/FindUnique/FindCrismaController";

import { UpdateTurmaController } from "./controllers/Update/UpdateTurmaController";
import { UpdateCatequeseAdultosController } from "./controllers/Update/UpdateCatequeseAdultosController";
import { UpdatePessoaController } from "./controllers/Update/UpdatePessoaController";
import { UpdateUserController } from "./controllers/Update/UpdateUserController";
import { UpdateSacramentoController } from "./controllers/Update/UpdateSacramentoController";
import { UpdatePadrinhoMadrinhaController } from "./controllers/Update/UpdatePadrinhoMadrinhaController";
import { UpdateBatismoController } from "./controllers/Update/UpdateBatismoController";
import { UpdateAdmissaoController } from "./controllers/Update/UpdateAdmissaoController";
import { UpdateEucaristiaPrimeiraController } from "./controllers/Update/UpdateEucaristiaPrimeiraController";
import { UpdateCrismaController } from "./controllers/Update/UpdateCrismaController";

const router = Router();

const createTurma = new CreateTurmaController();
const createCatequeseAdultos = new CreateCatequeseAdultosController();
const createPessoa = new CreatePessoaController();
const createUser = new CreateUserController();
const createSacramento = new CreateSacramentoController();
const createPadrinhoMadrinha = new CreatePadrinhoMadrinhaController();
const createBatismo = new CreateBatismoController();
const createAdmissao = new CreateAdmissaoController();
const createEucaristiaPrimeira = new CreateEucaristiaPrimeiraController();
const createCrisma = new CreateCrismaController();

const findTurma = new FindTurmaController();
const findCatequeseAdultos = new FindCatequeseAdultosController();
const findPessoa = new FindPessoaController();
const findUser = new FindUserController();
const findSacramento = new FindSacramentoController();
const findPadrinhoMadrinha = new FindPadrinhoMadrinhaController();
const findBatismo = new FindBatismoController();
const findAdmissao = new FindAdmissaoController();
const findEucaristiaPrimeira = new FindEucaristiaPrimeiraController();
const findCrisma = new FindCrismaController();

const readTurma = new ReadTurmaController();
const readCatequeseAdultos = new ReadCatequeseAdultosController();
const readPessoa = new ReadPessoaController();
const readUser = new ReadUserController();
const readSacramento = new ReadSacramentoController();
const readPadrinhoMadrinha = new ReadPadrinhoMadrinhaController();
const readBatismo = new ReadBatismoController();
const readAdmissao = new ReadAdmissaoController();
const readEucaristiaPrimeira = new ReadEucaristiaPrimeiraController();
const readCrisma = new ReadCrismaController();

const updateTurma = new UpdateTurmaController();
const updateCatequeseAdultos = new UpdateCatequeseAdultosController();
const updatePessoa = new UpdatePessoaController();
const updateUser = new UpdateUserController();
const updateSacramento = new UpdateSacramentoController();
const updatePadrinhoMadrinha = new UpdatePadrinhoMadrinhaController();
const updateBatismo = new UpdateBatismoController();
const updateAdmissao = new UpdateAdmissaoController();
const updateEucaristiaPrimeira = new UpdateEucaristiaPrimeiraController();
const updateCrisma = new UpdateCrismaController();

const deleteTurma = new DeleteTurmaController();
const deleteCatequeseAdultos = new DeleteCatequeseAdultosController();
const deletePessoa = new DeletePessoaController();
const deleteUser = new DeleteUserController();
const deleteSacramento = new DeleteSacramentoController();
const deletePadrinhoMadrinha = new DeletePadrinhoMadrinhaController();
const deleteBatismo = new DeleteBatismoController();
const deleteAdmissao = new DeleteAdmissaoController();
const deleteEucaristiaPrimeira = new DeleteEucaristiaPrimeiraController();
const deleteCrisma = new DeleteCrismaController();

router.post("/create/turma", createTurma.handle);
router.post("/create/catequeseadulto", createCatequeseAdultos.handle);
router.post("/create/pessoa", createPessoa.handle);
router.post("/create/user", createUser.handle);
router.post("/create/sacramento", createSacramento.handle);
router.post("/create/padrinhomadrinha", createPadrinhoMadrinha.handle);
router.post("/create/batismo", createBatismo.handle);
router.post("/create/admissao", createAdmissao.handle);
router.post("/create/primeiraeucaristia", createEucaristiaPrimeira.handle);
router.post("/create/crisma", createCrisma.handle);

router.get("/findbypk/turma/:idTurma", findTurma.handle);
router.get(
  "/findbypk/catequeseadulto/:idCatequeseAdultos",
  findCatequeseAdultos.handle
);
router.get("/findbypk/pessoa/:id", findPessoa.handle);
router.get("/findbypk/user/:idPessoa", findUser.handle);
router.get("/findbypk/sacramento/:idSacramento", findSacramento.handle);
router.get("/findbypk/padrinhomadrinha/:idPessoa", findPadrinhoMadrinha.handle);
router.get("/findbypk/batismo/:idSacramento", findBatismo.handle);
router.get("/findbypk/admissao/:idSacramento", findAdmissao.handle);
router.get(
  "/findbypk/primeiraeucaristia/:idSacramento",
  findEucaristiaPrimeira.handle
);
router.get("/findbypk/crisma/:idSacramento", findCrisma.handle);

router.get("/readall/turma", readTurma.handle);
router.get("/readall/catequeseadulto", readCatequeseAdultos.handle);
router.get("/readall/pessoa", readPessoa.handle);
router.get("/readall/user", readUser.handle);
router.get("/readall/sacramento", readSacramento.handle);
router.get("/readall/padrinhomadrinha", readPadrinhoMadrinha.handle);
router.get("/readall/batismo", readBatismo.handle);
router.get("/readall/admissao", readAdmissao.handle);
router.get("/readall/primeiraeucaristia", readEucaristiaPrimeira.handle);
router.get("/readall/crisma", readCrisma.handle);

router.patch("/update/turma/:idTurma", updateTurma.handle);
router.patch(
  "/update/catequeseadulto/:idCatequeseAdultos",
  updateCatequeseAdultos.handle
);
router.patch("/update/pessoa/:id", updatePessoa.handle);
router.patch("/update/user/:idPessoa", updateUser.handle);
router.patch("/update/sacramento/:idSacramento", updateSacramento.handle);
router.patch(
  "/update/padrinhomadrinha/:idPessoa",
  updatePadrinhoMadrinha.handle
);
router.patch("/update/batismo/:idSacramento", updateBatismo.handle);
router.patch("/update/admissao/:idSacramento", updateAdmissao.handle);
router.patch(
  "/update/primeiraeucaristia/:idSacramento",
  updateEucaristiaPrimeira.handle
);
router.patch("/update/crisma/:idSacramento", updateCrisma.handle);

router.delete("/delete/turma/:idTurma", deleteTurma.handle);
router.delete(
  "/delete/catequeseadulto/:idCatequeseAdultos",
  deleteCatequeseAdultos.handle
);
router.delete("/delete/user/:idPessoa", deleteUser.handle);
router.delete("/delete/sacramento/:idSacramento", deleteSacramento.handle);
router.delete(
  "/delete/padrinhomadrinha/:idPessoa",
  deletePadrinhoMadrinha.handle
);
router.delete("/delete/batismo/:idSacramento", deleteBatismo.handle);
router.delete("/delete/admissao/:idSacramento", deleteAdmissao.handle);
router.delete(
  "/delete/primeiraeucaristia/:idSacramento",
  deleteEucaristiaPrimeira.handle
);
router.delete("/delete/crisma/:idSacramento", deleteCrisma.handle);

export { router };
