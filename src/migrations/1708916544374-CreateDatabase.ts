import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1708916544374 implements MigrationInterface {
    name = 'CreateDatabase1708916544374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" integer NOT NULL`);
    }

}
