-- CreateTable
CREATE TABLE "turmas" (
    "idTurma" SERIAL NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("idTurma")
);

-- CreateTable
CREATE TABLE "catequeseAdultos" (
    "idCatequeseAdultos" SERIAL NOT NULL,
    "idTurma" INTEGER NOT NULL,

    CONSTRAINT "catequeseAdultos_pkey" PRIMARY KEY ("idCatequeseAdultos")
);

-- CreateTable
CREATE TABLE "pessoas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" BOOLEAN NOT NULL,
    "rg" BOOLEAN NOT NULL,
    "comprovanteResidencia" BOOLEAN NOT NULL,
    "casado" BOOLEAN NOT NULL,
    "dataNasc" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "idPessoa" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "permissao" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("idPessoa")
);

-- CreateTable
CREATE TABLE "sacramentos" (
    "idSacramento" SERIAL NOT NULL,
    "idPessoa" INTEGER NOT NULL,
    "idTurma" INTEGER NOT NULL,
    "dataInicioCiclo" TIMESTAMP(3) NOT NULL,
    "dataFimCiclo" TIMESTAMP(3) NOT NULL,
    "dataMissa" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sacramentos_pkey" PRIMARY KEY ("idSacramento")
);

-- CreateTable
CREATE TABLE "padrinhosMadrinhas" (
    "idPessoa" INTEGER NOT NULL,
    "comprovanteBatismoAdmissao" BOOLEAN NOT NULL,
    "comprovantePrimeiraEucaristia" BOOLEAN NOT NULL,
    "comprovanteCrisma" BOOLEAN NOT NULL,
    "comprovanteCasamento" BOOLEAN NOT NULL,

    CONSTRAINT "padrinhosMadrinhas_pkey" PRIMARY KEY ("idPessoa")
);

-- CreateTable
CREATE TABLE "batismos" (
    "idSacramento" INTEGER NOT NULL,
    "idPadrinhoMadrinha" INTEGER NOT NULL,

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
CREATE TABLE "eucaristiaPrimeira" (
    "idSacramento" INTEGER NOT NULL,
    "comprovanteBatismoAdmissao" BOOLEAN NOT NULL,
    "comprovanteCasamento" BOOLEAN NOT NULL,
    "Eucaristia" TEXT NOT NULL,

    CONSTRAINT "eucaristiaPrimeira_pkey" PRIMARY KEY ("idSacramento")
);

-- CreateTable
CREATE TABLE "crismas" (
    "idSacramento" INTEGER NOT NULL,
    "comprovanteBatismoAdmissao" BOOLEAN NOT NULL,
    "comprovanteCasamento" BOOLEAN NOT NULL,
    "idPadrinhoMadrinha" INTEGER NOT NULL,

    CONSTRAINT "crismas_pkey" PRIMARY KEY ("idSacramento")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "catequeseAdultos" ADD CONSTRAINT "catequeseAdultos_idTurma_fkey" FOREIGN KEY ("idTurma") REFERENCES "turmas"("idTurma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramentos" ADD CONSTRAINT "sacramentos_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sacramentos" ADD CONSTRAINT "sacramentos_idTurma_fkey" FOREIGN KEY ("idTurma") REFERENCES "turmas"("idTurma") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "padrinhosMadrinhas" ADD CONSTRAINT "padrinhosMadrinhas_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "batismos" ADD CONSTRAINT "batismos_idSacramento_fkey" FOREIGN KEY ("idSacramento") REFERENCES "sacramentos"("idSacramento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "batismos" ADD CONSTRAINT "batismos_idPadrinhoMadrinha_fkey" FOREIGN KEY ("idPadrinhoMadrinha") REFERENCES "padrinhosMadrinhas"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "admissoes" ADD CONSTRAINT "admissoes_idSacramento_fkey" FOREIGN KEY ("idSacramento") REFERENCES "sacramentos"("idSacramento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eucaristiaPrimeira" ADD CONSTRAINT "eucaristiaPrimeira_idSacramento_fkey" FOREIGN KEY ("idSacramento") REFERENCES "sacramentos"("idSacramento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crismas" ADD CONSTRAINT "crismas_idSacramento_fkey" FOREIGN KEY ("idSacramento") REFERENCES "sacramentos"("idSacramento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crismas" ADD CONSTRAINT "crismas_idPadrinhoMadrinha_fkey" FOREIGN KEY ("idPadrinhoMadrinha") REFERENCES "padrinhosMadrinhas"("idPessoa") ON DELETE RESTRICT ON UPDATE CASCADE;
