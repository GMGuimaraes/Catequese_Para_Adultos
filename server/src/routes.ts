import { Router } from "express";
import { CreateTurmaController } from "./controllers/CreateTurmaController";
import { CreateCatequeseAdultosController } from "./controllers/CreateCatequeseAdultosController";
import { CreatePessoaController } from "./controllers/CreatePessoaController";
import { CreateSacramentoController } from "./controllers/CreateSacramentoController";
import { CreatePadrinhoMadrinhaController } from "./controllers/CreatePadrinhoMadrinhaController";
import { CreateBatismoController } from "./controllers/CreateBatismoController";
import { CreateAdmissaoController } from "./controllers/CreateAdmissaoController";
import { CreateEucaristiaPrimeiraController } from "./controllers/CreateEucaristiaPrimeiraController";
import { CreateCrismaController } from "./controllers/CreateCrismaController";
import { FindTurmaController } from "./controllers/FindTurmaController";
import { FindCatequeseAdultosController } from "./controllers/FindCatequeseAdultosController";
import { FindPessoaController } from "./controllers/FindPessoaController";
import { FindSacramentoController } from "./controllers/FindSacramentoController";
import { FindPadrinhoMadrinhaController } from "./controllers/FindPadrinhoMadrinhaController";
import { FindBatismoController } from "./controllers/FindBatismoController";
import { FindAdmissaoController } from "./controllers/FindAdmissaoController";
import { FindEucaristiaPrimeiraController } from "./controllers/FindEucaristiaPrimeiraController";
import { FindCrismaController } from "./controllers/FindCrismaController";

const router = Router();

const createTurma = new CreateTurmaController();
const createCatequeseAdultos = new CreateCatequeseAdultosController();
const createPessoa = new CreatePessoaController();
const createSacramento = new CreateSacramentoController();
const createPadrinhoMadrinha = new CreatePadrinhoMadrinhaController();
const createBatismo = new CreateBatismoController();
const createAdmissao = new CreateAdmissaoController();
const createEucaristiaPrimeira = new CreateEucaristiaPrimeiraController();
const createCrisma = new CreateCrismaController();

const findTurma = new FindTurmaController();
const findCatequeseAdultos = new FindCatequeseAdultosController();
const findPessoa = new FindPessoaController();
const findSacramento = new FindSacramentoController();
const findPadrinhoMadrinha = new FindPadrinhoMadrinhaController();
const findBatismo = new FindBatismoController();
const findAdmissao = new FindAdmissaoController();
const findEucaristiaPrimeira = new FindEucaristiaPrimeiraController();
const findCrisma = new FindCrismaController();


router.post("/turma", createTurma.handle);
router.post("/catequeseadulto", createCatequeseAdultos.handle);
router.post("/pessoa", createPessoa.handle);
router.post("/sacramento", createSacramento.handle);
router.post("/padrinhomadrinha", createPadrinhoMadrinha.handle);
router.post("/batismo", createBatismo.handle);
router.post("/admissao", createAdmissao.handle);
router.post("/primeiraeucaristia", createEucaristiaPrimeira.handle);
router.post("/crisma", createCrisma.handle);

router.get("/turma/:idTurma", findTurma.handle);
router.get("/catequeseadulto/:idCatequeseAdultos", findCatequeseAdultos.handle);
router.get("/pessoa:cpf", findPessoa.handle);
router.get("/sacramento:idSacramento", findSacramento.handle);
router.get("/padrinhomadrinha:cpfPessoa", findPadrinhoMadrinha.handle);
router.get("/batismo:idSacramento", findBatismo.handle);
router.get("/admissao:idSacramento", findSacramento.handle);
router.get("/primeiraeucaristia:idSacramento", findEucaristiaPrimeira.handle);
router.get("/crisma:idSacramento", findCrisma.handle);


export { router };