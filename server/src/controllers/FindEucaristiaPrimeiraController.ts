import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class FindEucaristiaPrimeiraController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;

        const eucaristiaPrimeira = await prismaClient.eucaristiaPrimeira.findFirst({
            where: {
                idSacramento: +idSacramento,
            },
        });
        return response.json(eucaristiaPrimeira);
    }
}