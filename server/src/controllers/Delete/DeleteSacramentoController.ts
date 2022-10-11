import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class DeleteSacramentoController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;

        const sacramento = await prismaClient.sacramento.delete({
            where: {
                idSacramento: +idSacramento,
            },
        });
        return response.json(sacramento);
    }
}