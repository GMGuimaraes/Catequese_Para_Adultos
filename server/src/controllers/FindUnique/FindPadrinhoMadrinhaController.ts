import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class FindPadrinhoMadrinhaController {
    async handle(request: Request, response: Response) {
        const { cpfPessoa } = request.params;

        const padrinhoMadrinha = await prismaClient.padrinhoMadrinha.findUnique({
            where: {
                cpfPessoa: +cpfPessoa,
            },
        });
        return response.json(padrinhoMadrinha);
    }
}