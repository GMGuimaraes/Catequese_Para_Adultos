import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class UpdateCatequeseAdultosController {
    async handle(request: Request, response: Response) {
        const { idCatequeseAdultos } = request.params;
        const { idTurma } = request.body;

        const catequeseAdultos = await prismaClient.catequeseAdultos.update({
            where: {
                idCatequeseAdultos: +idCatequeseAdultos,
            },
            data: {
                idTurma
            }
        });
        return response.json(catequeseAdultos);
    }
}