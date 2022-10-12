import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreateTurmaController{
    async handle(request: Request, response: Response) {
        const { dataInicio, dataFim } = request.body;

        const turma = await prismaClient.turma.create({
            data: {
                dataInicio,
                dataFim
            }
        })

        return response.json(turma);
    }
}

