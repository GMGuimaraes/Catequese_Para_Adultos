import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreateEucaristiaPrimeiraController{
    async handle(request: Request, response: Response) {
        const { idSacramento, comprovanteBatismoAdmissao, comprovanteCasamento, Eucaristia } = request.body;

        const eucaristiaPrimeira = await prismaClient.eucaristiaPrimeira.create({
            data: {
                idSacramento,
                comprovanteBatismoAdmissao,
                comprovanteCasamento,
                Eucaristia
            }
        })

        return response.json(eucaristiaPrimeira);
    }
}

