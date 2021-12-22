import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddTypeToUser1640132592271 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users',
            new TableColumn({
                name: 'type',
                type: 'varchar',
                default: "'client'",
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'type');
    }
}
