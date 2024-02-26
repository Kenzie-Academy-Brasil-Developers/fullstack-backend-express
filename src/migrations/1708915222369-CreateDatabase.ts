import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1708915222369 implements MigrationInterface {
    name = 'CreateDatabase1708915222369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellphone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellphone" character varying(30) NOT NULL`);
    }

}
