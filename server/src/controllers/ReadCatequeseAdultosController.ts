import { Request, Response } from "express";
import { prismaClient } from "../database/prismaCliente";

export class ReadCatequeseAdultosController {
    async handle(request: Request, response: Response) {

        const catequeseAdultos = await prismaClient.catequeseAdultos.findMany();
        
        return response.json(catequeseAdultos);
    }
}