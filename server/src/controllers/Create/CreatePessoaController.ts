import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreatePessoaController{
    async handle(request: Request, response: Response) {
        const { cpf, nome, rg, comprovanteResidencia, casado, idade } = request.body;

        const pessoa = await prismaClient.pessoa.create({
            data: {
                cpf,
                nome,
                rg,
                comprovanteResidencia,
                casado,
                idade
            }
        })

        return response.json(pessoa);
    }
}

