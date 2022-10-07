import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class UpdatePessoaController {
    async handle(request: Request, response: Response) {
        const { cpf } = request.params;
        const { nome, rg, comprovanteResidencia, casado, idade } = request.body;

        const pessoa = await prismaClient.pessoa.update({
            where: {
                cpf: +cpf,
            },
            data: {
                nome,
                rg,
                comprovanteResidencia,
                casado,
                idade
            }
        });
        return response.json(pessoa);
    }
}