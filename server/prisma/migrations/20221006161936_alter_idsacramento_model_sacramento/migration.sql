-- AlterTable
CREATE SEQUENCE "sacramentos_idsacramento_seq";
ALTER TABLE "sacramentos" ALTER COLUMN "idSacramento" SET DEFAULT nextval('sacramentos_idsacramento_seq');
ALTER SEQUENCE "sacramentos_idsacramento_seq" OWNED BY "sacramentos"."idSacramento";
