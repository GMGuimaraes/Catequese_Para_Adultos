import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdateSacramentoController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;
        const { idPessoa, idTurma, dataInicioCiclo, dataFimCiclo, dataMissa } = request.body;

        const sacramento = await prismaClient.sacramento.update({
            where: {
                idSacramento: +idSacramento,
            },
            data: {
                idPessoa,
                idTurma,
                dataInicioCiclo,
                dataFimCiclo,
                dataMissa
            }
        });
        return response.json(sacramento);
    }
}