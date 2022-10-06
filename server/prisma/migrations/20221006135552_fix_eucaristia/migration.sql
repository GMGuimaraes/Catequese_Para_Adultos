/*
  Warnings:

  - You are about to drop the column `primeiraEucaristia` on the `eucaristiaPrimeira` table. All the data in the column will be lost.
  - Added the required column `Eucaristia` to the `eucaristiaPrimeira` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "eucaristiaPrimeira" DROP COLUMN "primeiraEucaristia",
ADD COLUMN     "Eucaristia" TEXT NOT NULL;
