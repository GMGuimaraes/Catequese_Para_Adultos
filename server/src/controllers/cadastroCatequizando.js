const { response, request } = require("express");
const express = require("express")
const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

const allcadastroCatequizando = [{ name: "teste", cpf:false, rg: false, comprovanteResidencia: false, 
inicioCiclo: "01-01-2022", fimCiclo: "01-01-2023", batismo: false, admissao: false, eucaristia: false, crisma: false, docBatismo: 
false, docAdmissao: false, docEucaristia: false, matrimonio: false, matrimonioValid: false, 
docMatrimonio: false, }];
const cadastroCatequizandoRoutes = express.Router();

cadastroCatequizandoRoutes.post("/cadastroCatequizando", async (request, response) => {
async function main(){
    try {
        const res = await prisma.catequizando.create({
                data: {
                    name ,
                    inicioCiclo,
                    fimCiclo,
                    nomeTurma,
                    },
                });
        //return response.status(200).json(cat);
        }
    catch(error) {
        return response.json({ error });
    }    
    finally {
        async() => {
            await prisma.$disconnect();
        }
    }
    }
});

//Create - não ok


//Read 1 , Retorna todos os catequizandos cadastrados - OK
cadastroCatequizandoRoutes.get("/cadastroCatequizando", async (request, response) =>{
    const catequizando = await prisma.catequizando.findMany()
    return response.status(200).json(catequizando);
});

//Read 2, Retorna 1 catequizando cadastrado  - não ok
cadastroCatequizandoRoutes.get("/cadastroCatequizando/:id", async  (request, response) => {
    const { id } = request.params.id;
    const catequizando = await prisma.catequizando.findUnique({
        where: {
            id,
        },
    })
    return response.json(catequizando[id]);
})

//Update - não ok
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
//Delete - não ok
//cadastroCatequizandoRoutes.delete("cadastroCatequizando/:id", async (request, response) => {
cadastroCatequizandoRoutes.delete("/cadastroCatequizando/:id", async (request, response) => {
    const {id} = request.params;
    const intId = parseInt(id);
    
    if(!intId){
        return response.status(400).json("Id é obrigatório!");
    }

    const catequizandoAlreadyExist = await prisma.catequizando.findUnique({where: { intId }});

    if(!catequizandoAlreadyExist){
        return response.status(404).json("Catequizando não existe");
    }

    await prisma.catequizando.delete({ where: { intId } });
    return response.status(200).send();

});
module.exports = cadastroCatequizandoRoutes;