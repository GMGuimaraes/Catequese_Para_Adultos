import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class DeleteTurmaController {
    async handle(request: Request, response: Response) {
        const { idTurma } = request.params;

        const turma = await prismaClient.turma.delete({
            where: {
                idTurma: +idTurma,
            },
        });
        return response.json(turma);
    }
}