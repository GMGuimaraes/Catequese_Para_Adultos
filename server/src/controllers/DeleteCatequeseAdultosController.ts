import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class DeleteCatequeseAdultosController {
    async handle(request: Request, response: Response) {
        const { idCatequeseAdultos } = request.params;

        const catequeseAdultos = await prismaClient.catequeseAdultos.delete({
            where: {
                idCatequeseAdultos: +idCatequeseAdultos,
            },
        });
        return response.json(catequeseAdultos);
    }
}