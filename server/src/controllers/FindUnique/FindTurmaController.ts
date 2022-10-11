import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class FindTurmaController {
    async handle(request: Request, response: Response) {
        const { idTurma } = request.params;

        const turma = await prismaClient.turma.findUnique({
            where: {
                idTurma: +idTurma,
            },
        });
        return response.json(turma);
    }
}