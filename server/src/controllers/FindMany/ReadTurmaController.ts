import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class ReadTurmaController {
    async handle(request: Request, response: Response) {

        const turma = await prismaClient.turma.findMany();
        
        return response.json(turma);
    }
}