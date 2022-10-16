import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { idPessoa } = request.params;
        const { email, password, permissao } = request.body;

        const user = await prismaClient.user.update({
            where: {
                idPessoa: +idPessoa,
            },
            data: {
                email,
                password,
                rg,
                permissao
            }
        });
        return response.json(user);
    }
}