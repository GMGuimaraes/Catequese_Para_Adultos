import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreatePessoaController{
    async handle(request: Request, response: Response) {
        const { nome, cpf, rg, comprovanteResidencia, casado, dataNasc } = request.body;

        const pessoa = await prismaClient.pessoa.create({
            data: {
                nome,
                cpf,
                rg,
                comprovanteResidencia,
                casado,
                dataNasc
            }
        })

        return response.json(pessoa);
    }
}

