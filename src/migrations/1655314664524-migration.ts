import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1655314664524 implements MigrationInterface {
    name = 'migration1655314664524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sample" ("id" SERIAL NOT NULL, "val" character varying NOT NULL, CONSTRAINT "PK_1e92238b098b5a4d13f6422cba7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "sample"`);
    }

}
