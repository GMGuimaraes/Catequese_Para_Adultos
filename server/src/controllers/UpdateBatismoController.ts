import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class UpdateBatismoController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;
        const { cpfPadrinhoMadrinha } = request.body;

        const batismo = await prismaClient.batismo.update({
            where: {
                idSacramento: +idSacramento,
            },
            data: {
                cpfPadrinhoMadrinha
            }
        });
        return response.json(batismo);
    }
}