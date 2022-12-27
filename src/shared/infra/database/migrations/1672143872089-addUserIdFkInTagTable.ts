import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUserIdFkInTagTable1672143872089 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(
    //   `ALTER TABLE "tags" ADD COLUMN "user_id" uuid NOT NULL`,
    // );
    await queryRunner.query(
      'ALTER TABLE "tags" ADD COLUMN "user_id" uuid  NOT NULL, ADD CONSTRAINT user_fk_tag FOREIGN KEY(user_id) REFERENCES users(id)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('tags', 'user_id');
  }
}
