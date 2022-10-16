import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreateSacramentoController{
    async handle(request: Request, response: Response) {
        const { idPessoa, idTurma, dataInicioCiclo, dataFimCiclo, dataMissa } = request.body;

        const sacramento = await prismaClient.sacramento.create({
            data: {
                idPessoa,
                idTurma,
                dataInicioCiclo,
                dataFimCiclo,
                dataMissa
            }
        })

        return response.json(sacramento);
    }
}