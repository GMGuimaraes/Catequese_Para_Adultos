-- CreateTable
CREATE TABLE "catequizando" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" BOOLEAN NOT NULL DEFAULT false,
    "rg" BOOLEAN NOT NULL DEFAULT false,
    "comprovanteResidencia" BOOLEAN NOT NULL DEFAULT false,
    "inicioCiclo" TIMESTAMP(3) NOT NULL,
    "fimCiclo" TIMESTAMP(3) NOT NULL,
    "batismo" BOOLEAN NOT NULL DEFAULT false,
    "admissao" BOOLEAN NOT NULL DEFAULT false,
    "eucaristia" BOOLEAN NOT NULL DEFAULT false,
    "crisma" BOOLEAN NOT NULL DEFAULT false,
    "docBatismo" BOOLEAN NOT NULL DEFAULT false,
    "docAdmissao" BOOLEAN NOT NULL DEFAULT false,
    "docEucaristia" BOOLEAN NOT NULL DEFAULT false,
    "matrimonio" BOOLEAN NOT NULL DEFAULT false,
    "matrimonioValid" BOOLEAN NOT NULL DEFAULT false,
    "docMatrimonio" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "catequizando_pkey" PRIMARY KEY ("id")
);
