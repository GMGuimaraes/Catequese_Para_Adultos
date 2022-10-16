import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class ReadUserController {
    async handle(request: Request, response: Response) {

        const user = await prismaClient.user.findMany();
        
        return response.json(user);
    }
}