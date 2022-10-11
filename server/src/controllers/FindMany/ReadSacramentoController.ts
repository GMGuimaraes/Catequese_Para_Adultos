import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class ReadSacramentoController {
    async handle(request: Request, response: Response) {

        const sacramento = await prismaClient.sacramento.findMany();
        
        return response.json(sacramento);
    }
}