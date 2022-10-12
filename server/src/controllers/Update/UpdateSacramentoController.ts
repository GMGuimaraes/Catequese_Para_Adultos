import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdateSacramentoController {
    async handle(request: Request, response: Response) {
        const { idSacramento } = request.params;
        const { cpfPessoa, idTurma, dataInicioCiclo, dataFimCiclo, dataMissa } = request.body;

        const sacramento = await prismaClient.sacramento.update({
            where: {
                idSacramento: +idSacramento,
            },
            data: {
                cpfPessoa,
                idTurma,
                dataInicioCiclo,
                dataFimCiclo,
                dataMissa
            }
        });
        return response.json(sacramento);
    }
}