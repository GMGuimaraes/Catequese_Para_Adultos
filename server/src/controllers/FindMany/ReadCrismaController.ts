import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaCliente";

export class ReadCrismaController {
    async handle(request: Request, response: Response) {

        const crisma = await prismaClient.crisma.findMany();
        
        return response.json(crisma);
    }
}