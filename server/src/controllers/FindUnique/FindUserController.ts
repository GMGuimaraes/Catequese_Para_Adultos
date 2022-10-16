import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class FindUserController {
    async handle(request: Request, response: Response) {
        const { idPessoa } = request.params;

        const user = await prismaClient.user.findUnique({
            where: {
                idPessoa: +idPessoa,
            },
        });
        return response.json(user);
    }
}