import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdatePadrinhoMadrinhaController {
    async handle(request: Request, response: Response) {
        const { cpfPessoa } = request.params;
        const { comprovanteBatismoAdmissao, comprovantePrimeiraEucaristia, comprovanteCrisma, comprovanteCasamento } = request.body;

        const padrinhoMadrinha = await prismaClient.padrinhoMadrinha.update({
            where: {
                cpfPessoa: +cpfPessoa,
            },
            data: {
                comprovanteBatismoAdmissao,
                comprovantePrimeiraEucaristia,
                comprovanteCrisma,
                comprovanteCasamento
            }
        });
        return response.json(padrinhoMadrinha);
    }
}