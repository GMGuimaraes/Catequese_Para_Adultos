import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdateCrismaController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;
        const { comprovanteBatismoAdmissao, comprovanteCasamento, idPadrinhoMadrinha } = request.body;

        const crisma = await prismaClient.crisma.update({
            where: {
                idSacramento: +idSacramento,
            },
            data: {
                comprovanteBatismoAdmissao,
                comprovanteCasamento,
                idPadrinhoMadrinha
            }
        });
        return response.json(crisma);
    }
}