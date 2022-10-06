import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class CreateCatequeseAdultosController{
    async handle(request: Request, response: Response) {
        const { idCatequeseAdultos, idTurma } = request.body;

        const catequeseAdultos = await prismaClient.catequeseAdultos.create({
            data: {
                idCatequeseAdultos,
                idTurma
            }
        })

        return response.json(catequeseAdultos);
    }
}

