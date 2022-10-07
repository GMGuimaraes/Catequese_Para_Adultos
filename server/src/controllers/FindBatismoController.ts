import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class FindBatismoController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;

        const batismo = await prismaClient.batismo.findUnique({
            where: {
                idSacramento: +idSacramento,
            },
        });
        return response.json(batismo);
    }
}