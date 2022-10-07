import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class FindSacramentoController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;

        const sacramento = await prismaClient.sacramento.findUnique({
            where: {
                idSacramento: +idSacramento,
            },
        });
        return response.json(sacramento);
    }
}