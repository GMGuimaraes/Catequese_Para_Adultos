import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class ReadBatismoController {
    async handle(request: Request, response: Response) {

        const batismo = await prismaClient.batismo.findMany();
        
        return response.json(batismo);
    }
}