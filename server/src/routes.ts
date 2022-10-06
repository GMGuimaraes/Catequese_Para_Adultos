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
router.post("/crisma", createCrisma.handle);

export { router };