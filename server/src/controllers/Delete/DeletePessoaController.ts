import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class DeletePessoaController {
    async handle(request: Request, response: Response) {
        const { cpf } = request.params;

        const pessoa = await prismaClient.pessoa.delete({
            where: {
                cpf: +cpf,
            },
        });
        return response.json(pessoa);
    }
}