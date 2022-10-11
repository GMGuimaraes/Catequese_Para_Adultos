import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class DeleteCrismaController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;

        const crisma = await prismaClient.crisma.delete({
            where: {
                idSacramento: +idSacramento,
            },
        });
        return response.json(crisma);
    }
}