import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class FindCatequeseAdultosController {
    async handle(request: Request, response: Response) {
        const { idCatequeseAdultos } = request.params;

        const catequeseAdultos = await prismaClient.catequeseAdultos.findUnique({
            where: {
                idCatequeseAdultos: +idCatequeseAdultos,
            },
        });
        return response.json(catequeseAdultos);
    }
}