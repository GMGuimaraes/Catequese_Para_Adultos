import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class DeleteAdmissaoController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;

        const admissao = await prismaClient.admissao.delete({
            where: {
                idSacramento: +idSacramento,
            },
        });
        return response.json(admissao);
    }
}