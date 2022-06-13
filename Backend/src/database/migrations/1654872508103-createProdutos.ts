import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProdutos1654872508103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({

            name: 'produtos',
            columns:[
            {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',    
            },
            {
                name: 'name',
                type: 'varchar',
            },
            {
                name: 'valor',
                type: 'numeric',
            },
            {
                name: 'quantidade',
                type: 'numeric',
            },],

            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos');
    }

}
