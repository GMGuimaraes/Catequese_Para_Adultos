import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class UpdateCrismaController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;
        const { comprovanteBatismoAdmissao, comprovanteCasamento, cpfPadrinhoMadrinha } = request.body;

        const crisma = await prismaClient.crisma.update({
            where: {
                idSacramento: +idSacramento,
            },
            data: {
                comprovanteBatismoAdmissao,
                comprovanteCasamento,
                cpfPadrinhoMadrinha
            }
        });
        return response.json(crisma);
    }
}