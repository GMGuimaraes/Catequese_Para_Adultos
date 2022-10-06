/*
  Warnings:

  - You are about to drop the column `DataFim` on the `turmas` table. All the data in the column will be lost.
  - You are about to drop the column `DataInicio` on the `turmas` table. All the data in the column will be lost.
  - Added the required column `dataFim` to the `turmas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataInicio` to the `turmas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "turmas" DROP COLUMN "DataFim",
DROP COLUMN "DataInicio",
ADD COLUMN     "dataFim" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dataInicio" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "catequeseAdultos" (
    "idCatequeseAdultos" SERIAL NOT NULL,
    "idTurma" INTEGER NOT NULL,

    CONSTRAINT "catequeseAdultos_pkey" PRIMARY KEY ("idCatequeseAdultos")
);

-- CreateTable
CREATE TABLE "pessoas" (
    "cpf" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "rg" BOOLEAN NOT NULL,
    "comprovanteResidencia" BOOLEAN NOT NULL,
    "casado" BOOLEAN NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("cpf")
);

-- CreateTable
CREATE TABLE "sacramentos" (
    "idSacramento" INTEGER NOT NULL,
    "cpfPessoa" INTEGER NOT NULL,
    "idTurma" INTEGER NOT NULL,
    "dataInicioCiclo" TIMESTAMP(3) NOT NULL,
    "dataFimCiclo" TIMESTAMP(3) NOT NULL,
    "dataMissa" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sacramentos_pkey" PRIMARY KEY ("idSacramento")
);

-- CreateTable
CREATE TABLE "padrinhosMadrinhas" (
    "cpfPessoa" INTEGER NOT NULL,
    "comprovanteBatismoAdmissao" BOOLEAN NOT NULL,
    "comprovantePrimeiraEucaristia" BOOLEAN NOT NULL,
    "comprovanteCrisma" BOOLEAN NOT NULL,
    "comprovanteCasamento" BOOLEAN NOT NULL,

    CONSTRAINT "padrinhosMadrinhas_pkey" PRIMARY KEY ("cpfPessoa")
);

-- CreateTable
CREATE TABLE "batismos" (
    "idSacramento" INTEGER NOT NULL,
    "cpfPadrinhoMadrinha" INTEGER NOT NULL,

    CONSTRAINT "batismos_pkey" PRIMARY KEY ("idSacramento")
);

-- CreateTable
CREATE TABLE "admissoes" (
    "idSacramento" INTEGER NOT NULL,
    "religiaoOrigem" TEXT NOT NULL,
    "dataOrigem" TEXT NOT NULL,

    CONSTRAINT "admissoes_pkey" PRIMARY KEY ("idSacramento")
);

-- CreateTable
CREATE TABLE "primeiraEucaristias" (
    "idSacramento" INTEGER NOT NULL,
    "comprovanteBatismoAdmissao" BOOLEAN NOT NULL,
    "comprovanteCasamento" BOOLEAN NOT NULL,
    "primeiraEucaristia" TEXT NOT NULL,

    CONSTRAINT "primeiraEucaristias_pkey" PRIMARY KEY ("idSacramento")
);

-- CreateTable
CREATE TABLE "Crismas" (
    "idSacramento" INTEGER NOT NULL,
    "comprovanteBatismoAdmissao" BOOLEAN NOT NULL,
    "comprovanteCasamento" BOOLEAN NOT NULL,
    "cpfPadrinhoMadrinha" INTEGER NOT NULL,

    CONSTRAINT "Crismas_pkey" PRIMARY KEY ("idSacramento")
);

-- AddForeignKey
ALTER TABLE "catequeseAdultos" ADD CONSTRAINT "catequeseAdultos_idTurma_fkey" FOREIGN KEY ("idTurma") REFERENCES "turmas"("idTurma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramentos" ADD CONSTRAINT "sacramentos_cpfPessoa_fkey" FOREIGN KEY ("cpfPessoa") REFERENCES "pessoas"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramentos" ADD CONSTRAINT "sacramentos_idTurma_fkey" FOREIGN KEY ("idTurma") REFERENCES "turmas"("idTurma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "padrinhosMadrinhas" ADD CONSTRAINT "padrinhosMadrinhas_cpfPessoa_fkey" FOREIGN KEY ("cpfPessoa") REFERENCES "pessoas"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "batismos" ADD CONSTRAINT "batismos_idSacramento_fkey" FOREIGN KEY ("idSacramento") REFERENCES "sacramentos"("idSacramento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "batismos" ADD CONSTRAINT "batismos_cpfPadrinhoMadrinha_fkey" FOREIGN KEY ("cpfPadrinhoMadrinha") REFERENCES "padrinhosMadrinhas"("cpfPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admissoes" ADD CONSTRAINT "admissoes_idSacramento_fkey" FOREIGN KEY ("idSacramento") REFERENCES "sacramentos"("idSacramento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "primeiraEucaristias" ADD CONSTRAINT "primeiraEucaristias_idSacramento_fkey" FOREIGN KEY ("idSacramento") REFERENCES "sacramentos"("idSacramento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crismas" ADD CONSTRAINT "Crismas_idSacramento_fkey" FOREIGN KEY ("idSacramento") REFERENCES "sacramentos"("idSacramento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crismas" ADD CONSTRAINT "Crismas_cpfPadrinhoMadrinha_fkey" FOREIGN KEY ("cpfPadrinhoMadrinha") REFERENCES "padrinhosMadrinhas"("cpfPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;
