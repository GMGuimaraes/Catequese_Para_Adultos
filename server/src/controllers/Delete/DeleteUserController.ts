import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { idPessoa } = request.params;

        const user = await prismaClient.user.delete({
            where: {
                idPessoa: +idPessoa,
            },
        });
        return response.json(user);
    }
}