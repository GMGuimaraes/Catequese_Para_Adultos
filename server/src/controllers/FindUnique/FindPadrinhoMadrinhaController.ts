import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class FindPadrinhoMadrinhaController {
    async handle(request: Request, response: Response) {
        const { idPessoa } = request.params;

        const padrinhoMadrinha = await prismaClient.padrinhoMadrinha.findUnique({
            where: {
                idPessoa: +idPessoa,
            },
        });
        return response.json(padrinhoMadrinha);
    }
}