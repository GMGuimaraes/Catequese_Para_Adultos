import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class FindAdmissaoController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;

        const admissao = await prismaClient.admissao.findUnique({
            where: {
                idSacramento: +idSacramento,
            },
        });
        return response.json(admissao);
    }
}