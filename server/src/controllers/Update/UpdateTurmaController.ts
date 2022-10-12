import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdateTurmaController {
    async handle(request: Request, response: Response) {
        const { idTurma } = request.params;
        const { dataInicio, dataFim } = request.body;

        const turma = await prismaClient.turma.update({
            where: {
                idTurma: +idTurma,
            },
            data: {
                dataInicio,
                dataFim
            }
        });
        return response.json(turma);
    }
}