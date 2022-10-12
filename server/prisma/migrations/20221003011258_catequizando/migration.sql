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
    "nomeTurma" TEXT NOT NULL,

    CONSTRAINT "catequizando_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "turma" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "turma_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "turma_nome_key" ON "turma"("nome");

-- AddForeignKey
ALTER TABLE "catequizando" ADD CONSTRAINT "catequizando_nomeTurma_fkey" FOREIGN KEY ("nomeTurma") REFERENCES "turma"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;
