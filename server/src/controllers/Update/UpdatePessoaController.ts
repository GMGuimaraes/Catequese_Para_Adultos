import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdatePessoaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { nome, cpf, rg, comprovanteResidencia, casado, dataNasc } = request.body;

        const pessoa = await prismaClient.pessoa.update({
            where: {
                id: +id,
            },
            data: {
                nome,
                cpf,
                rg,
                comprovanteResidencia,
                casado,
                dataNasc
            }
        });
        return response.json(pessoa);
    }
}