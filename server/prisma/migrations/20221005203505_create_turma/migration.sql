-- CreateTable
CREATE TABLE "turmas" (
    "idTurma" SERIAL NOT NULL,
    "DataInicio" TIMESTAMP(3) NOT NULL,
    "DataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "turmas_pkey" PRIMARY KEY ("idTurma")
);
