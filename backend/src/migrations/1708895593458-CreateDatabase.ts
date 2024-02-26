import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1708895593458 implements MigrationInterface {
    name = 'CreateDatabase1708895593458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(150) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "password" character varying(30) NOT NULL`);
    }

}
