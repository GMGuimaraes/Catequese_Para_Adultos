import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreateBatismoController{
    async handle(request: Request, response: Response) {
        const { idSacramento, cpfPadrinhoMadrinha } = request.body;

        const batismo = await prismaClient.batismo.create({
            data: {
                idSacramento,
                cpfPadrinhoMadrinha
            }
        })

        return response.json(batismo);
    }
}

