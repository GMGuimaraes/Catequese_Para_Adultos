import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class DeleteEucaristiaPrimeiraController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;

        const eucaristiaPrimeira = await prismaClient.eucaristiaPrimeira.delete({
            where: {
                idSacramento: +idSacramento,
            },
        });
        return response.json(eucaristiaPrimeira);
    }
}