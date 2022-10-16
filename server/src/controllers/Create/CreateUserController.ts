import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class CreateUserController{
    async handle(request: Request, response: Response) {
        const { idPessoa, email, password, permissao } = request.body;

        const user = await prismaClient.user.create({
            data: {
                idPessoa,
                email,
                password,
                permissao
            }
        })

        return response.json(user);
    }
}

