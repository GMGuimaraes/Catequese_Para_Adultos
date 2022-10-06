/*
  Warnings:

  - You are about to drop the `primeiraEucaristias` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "primeiraEucaristias" DROP CONSTRAINT "primeiraEucaristias_idSacramento_fkey";

-- DropTable
DROP TABLE "primeiraEucaristias";

-- CreateTable
CREATE TABLE "eucaristiaPrimeira" (
    "idSacramento" INTEGER NOT NULL,
    "comprovanteBatismoAdmissao" BOOLEAN NOT NULL,
    "comprovanteCasamento" BOOLEAN NOT NULL,
    "primeiraEucaristia" TEXT NOT NULL,

    CONSTRAINT "eucaristiaPrimeira_pkey" PRIMARY KEY ("idSacramento")
);

-- AddForeignKey
ALTER TABLE "eucaristiaPrimeira" ADD CONSTRAINT "eucaristiaPrimeira_idSacramento_fkey" FOREIGN KEY ("idSacramento") REFERENCES "sacramentos"("idSacramento") ON DELETE RESTRICT ON UPDATE CASCADE;
