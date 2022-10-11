import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class ReadPessoaController {
    async handle(request: Request, response: Response) {

        const pessoa = await prismaClient.pessoa.findMany();
        
        return response.json(pessoa);
    }
}