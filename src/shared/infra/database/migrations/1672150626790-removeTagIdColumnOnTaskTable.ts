import { MigrationInterface, QueryRunner } from 'typeorm';

export class removeTagIdColumnOnTaskTable1672150626790
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('tasks', 'tag_id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "tasks" ADD COLUMN "tag_id" uuid  NOT NULL, ADD CONSTRAINT tag_fk FOREIGN KEY(tag_id) REFERENCES tags(id)',
    );
  }
}
