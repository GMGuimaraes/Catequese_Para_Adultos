import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class ReadPadrinhoMadrinhaController {
    async handle(request: Request, response: Response) {

        const padrinhoMadrinha = await prismaClient.padrinhoMadrinha.findMany();
        
        return response.json(padrinhoMadrinha);
    }
}