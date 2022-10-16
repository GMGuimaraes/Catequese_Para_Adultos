import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreatePadrinhoMadrinhaController{
    async handle(request: Request, response: Response) {
        const { idPessoa, comprovanteBatismoAdmissao, comprovantePrimeiraEucaristia, comprovanteCrisma, comprovanteCasamento } = request.body;

        const padrinhoMadrinha = await prismaClient.padrinhoMadrinha.create({
            data: {
                idPessoa,
                comprovanteBatismoAdmissao,
                comprovantePrimeiraEucaristia,
                comprovanteCrisma,
                comprovanteCasamento
            }
        })

        return response.json(padrinhoMadrinha);
    }
}

