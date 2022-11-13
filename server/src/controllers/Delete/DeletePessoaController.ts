import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class DeletePessoaController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const pessoa = await prismaClient.pessoa.delete({
            where: {
                id: +id,
            },
        });
        return response.json(pessoa);
    }
}