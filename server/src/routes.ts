import { Router } from "express";
import { CreateAdmissaoController } from "./controllers/CreateAdmissaoController";
import { CreateBatismoController } from "./controllers/CreateBatismoController";
import { CreateCatequeseAdultosController } from "./controllers/CreateCatequeseAdultosController";
import { CreateCrismaController } from "./controllers/CreateCrismaController";
import { CreateEucaristiaPrimeiraController } from "./controllers/CreateEucaristiaPrimeiraController";
import { CreatePadrinhoMadrinhaController } from "./controllers/CreatePadrinhoMadrinhaController";
import { CreatePessoaController } from "./controllers/CreatePessoaController";
import { CreateSacramentoController } from "./controllers/CreateSacramentoController";
import { CreateTurmaController } from "./controllers/CreateTurmaController";

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

router.post("/turma", createTurma.handle);
router.post("/catequeseadulto", createCatequeseAdultos.handle);
router.post("/pessoa", createPessoa.handle);
router.post("/sacramento", createSacramento.handle);
router.post("/padrinhosmadrinha", createPadrinhoMadrinha.handle);
router.post("/batismo", createBatismo.handle);
router.post("/admissao", createAdmissao.handle);
router.post("/primeiraeucaristia", createEucaristiaPrimeira.handle);
router.post("/Crisma", createCrisma.handle);

export { router };