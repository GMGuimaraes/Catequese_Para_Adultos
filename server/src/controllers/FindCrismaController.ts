import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class FindCrismaController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;

        const crisma = await prismaClient.crisma.findUnique({
            where: {
                idSacramento: +idSacramento,
            },
        });
        return response.json(crisma);
    }
}