import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class CreateAdmissaoController{
    async handle(request: Request, response: Response) {
        const { idSacramento, religiaoOrigem, dataOrigem } = request.body;

        const admissao = await prismaClient.admissao.create({
            data: {
                idSacramento,
                religiaoOrigem,
                dataOrigem
            }
        })

        return response.json(admissao);
    }
}

