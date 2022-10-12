import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdateAdmissaoController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;
        const { religiaoOrigem, dataOrigem } = request.body;

        const admissao = await prismaClient.admissao.update({
            where: {
                idSacramento: +idSacramento,
            },
            data: {
                religiaoOrigem,
                dataOrigem
            }
        });
        return response.json(admissao);
    }
}