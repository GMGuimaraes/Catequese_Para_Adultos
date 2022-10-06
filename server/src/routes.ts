import { Router } from "express";
import { CreateTurmaController } from "./controllers/CreateTurmaController";

const router = Router();

const createTurma= new CreateTurmaController();

router.post("/turma", createTurma.handle);

export { router };