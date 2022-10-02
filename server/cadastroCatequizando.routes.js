const { response } = require("express");
const express = require("express")
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();
const allcadastroCatequizando = [{ name: "teste", cpf:false, rg: false, comprovanteResidencia: false, 
inicioCiclo: "01-01-2022", fimCiclo: "01-01-2023", batismo: false, admissao: false, eucaristia: false, crisma: false, docBatismo: 
false, docAdmissao: false, docEucaristia: false, matrimonio: false, matrimonioValid: false, 
docMatrimonio: false, }];
const cadastroCatequizandoRoutes = express.Router();

//Create
cadastroCatequizandoRoutes.post("/cadastroCatequizando", async (request, response) => {
    const { name } = response.body;
    const catequizando = await prisma.catequizando.create({
        data: {
            name,
            cpf:false,
            rg: false,
            comprovanteResidencia: false,
            inicioCiclo,
            fimCiclo,
            batismo: false,
            admissao: false,
            eucaristia: false,
            crisma: false,
            docBatismo: false,
            docAdmissao: false,
            docEucaristia: false,
            matrimonio: false,
            matrimonioValid: false,
            docMatrimonio: false,

        },
    });

    //allcadastroCatequizando.push({ name, status: false });
    return response.status(201).json(allcadastroCatequizando);
});

//Read, testar com o insomnia
cadastroCatequizandoRoutes.get("/cadastroCatequizando", async (request, response) =>{
    const catequizando = await prisma.catequizando.findMany()
    return response.status(200).json(allcadastroCatequizando);
});

//Update
cadastroCatequizandoRoutes.put("/cadastroCatequizando", async (request, response) => {
    const {name, id, cpf, rg, comprovanteResidencia, inicioCiclo,
        fimCiclo, batismo, admissao, eucaristia, crisma,
        docBatismo, docAdmissao, docEucaristia, matrimonio,
        matrimonioValid,docMatrimonio} = request.body;

        if(!id){
            return response.status(400).json("Id é obrigatório!");
        }

        const catequizandoAlreadyExist = await prisma.catequizando.findUnique({where: { id }});

        if(!catequizandoAlreadyExist){
            return response.status(404).json("Catequizando não existe");
        }
        const catequizando = await prisma.catequizando.update({
            where: {
                id,
            },
            data: {
                name,
                cpf,
                rg,
                comprovanteResidencia,
                inicioCiclo,
                fimCiclo,
                batismo,
                admissao,
                eucaristia,
                crisma,
                docBatismo,
                docAdmissao,
                docEucaristia,
                matrimonio,
                matrimonioValid,
                docMatrimonio,
    
            },
        });

        return response.status(200).json(catequizando);
});

module.exports = cadastroCatequizandoRoutes;