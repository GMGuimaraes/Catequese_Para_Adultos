import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdateEucaristiaPrimeiraController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;
        const { comprovanteBatismoAdmissao, comprovanteCasamento, Eucaristia } = request.body;

        const eucaristiaPrimeira = await prismaClient.eucaristiaPrimeira.update({
            where: {
                idSacramento: +idSacramento,
            },
            data: {
                comprovanteBatismoAdmissao,
                comprovanteCasamento,
                Eucaristia
            }
        });
        return response.json(eucaristiaPrimeira);
    }
}