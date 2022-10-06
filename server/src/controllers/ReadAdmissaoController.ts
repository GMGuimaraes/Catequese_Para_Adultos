import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class ReadAdmissaoController {
    async handle(request: Request, response: Response) {

        const admissao = await prismaClient.admissao.findMany();
        
        return response.json(admissao);
    }
}