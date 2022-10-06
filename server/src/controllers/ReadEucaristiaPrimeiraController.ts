import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class ReadEucaristiaPrimeiraController {
    async handle(request: Request, response: Response) {

        const eucaristiaPrimeira = await prismaClient.eucaristiaPrimeira.findMany();
        
        return response.json(eucaristiaPrimeira);
    }
}