import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreateCrismaController{
    async handle(request: Request, response: Response) {
        const { idSacramento, comprovanteBatismoAdmissao, comprovanteCasamento, idPadrinhoMadrinha } = request.body;

        const crisma = await prismaClient.crisma.create({
            data: {
                idSacramento,
                comprovanteBatismoAdmissao,
                comprovanteCasamento,
                idPadrinhoMadrinha
            }
        })

        return response.json(crisma);
    }
}

