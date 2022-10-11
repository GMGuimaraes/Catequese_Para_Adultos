import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreatePadrinhoMadrinhaController{
    async handle(request: Request, response: Response) {
        const { cpfPessoa, comprovanteBatismoAdmissao, comprovantePrimeiraEucaristia, comprovanteCrisma, comprovanteCasamento } = request.body;

        const padrinhoMadrinha = await prismaClient.padrinhoMadrinha.create({
            data: {
                cpfPessoa,
                comprovanteBatismoAdmissao,
                comprovantePrimeiraEucaristia,
                comprovanteCrisma,
                comprovanteCasamento
            }
        })

        return response.json(padrinhoMadrinha);
    }
}

