import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1722082104220 implements MigrationInterface {
    name = 'InitialMigration1722082104220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "street" character varying(45) NOT NULL, "zipcode" character varying(8) NOT NULL, "city" character varying(20) NOT NULL, "state" character varying(2) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shelters" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "whatsApp" character varying(12) NOT NULL, "password" character varying(120) NOT NULL, "addressId" integer, CONSTRAINT "UQ_7daeabd2875adabfa9c7043c5de" UNIQUE ("email"), CONSTRAINT "REL_01ec73ab750167f47beab3ec87" UNIQUE ("addressId"), CONSTRAINT "PK_91ad96be54ee26203d624b96f5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."pets_type_enum" AS ENUM('cachorro', 'gato')`);
        await queryRunner.query(`CREATE TYPE "public"."pets_gender_enum" AS ENUM('macho', 'femea')`);
        await queryRunner.query(`CREATE TABLE "pets" ("id" SERIAL NOT NULL, "name" character varying(90) NOT NULL, "type" "public"."pets_type_enum" NOT NULL, "gender" "public"."pets_gender_enum" NOT NULL, "adopted" boolean NOT NULL DEFAULT false, "castrated" boolean NOT NULL DEFAULT false, "bio" character varying(1024) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "userId" integer, "shelterId" integer, CONSTRAINT "PK_d01e9e7b4ada753c826720bee8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "cpf" character varying(11) NOT NULL, "password" character varying(120) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shelters" ADD CONSTRAINT "FK_01ec73ab750167f47beab3ec870" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_a9f39dd54113410cdd3a04e80eb" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_f8787644905ade45225e06ac499" FOREIGN KEY ("shelterId") REFERENCES "shelters"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_f8787644905ade45225e06ac499"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_a9f39dd54113410cdd3a04e80eb"`);
        await queryRunner.query(`ALTER TABLE "shelters" DROP CONSTRAINT "FK_01ec73ab750167f47beab3ec870"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "pets"`);
        await queryRunner.query(`DROP TYPE "public"."pets_gender_enum"`);
        await queryRunner.query(`DROP TYPE "public"."pets_type_enum"`);
        await queryRunner.query(`DROP TABLE "shelters"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
