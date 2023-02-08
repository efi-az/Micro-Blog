import { QueryRunner, DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class BaseTransaction<ActionDto, Entity> {
    protected constructor(private readonly dataSource: DataSource) { }

    protected abstract executeTransaction(data: ActionDto, queryRunner: QueryRunner): Promise<Entity>;

    private async createRunner(): Promise<QueryRunner> {
        return this.dataSource.createQueryRunner();
    }

    async run(data: ActionDto): Promise<Entity> {
        const queryRunner = await this.createRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            const result = await this.executeTransaction(data, queryRunner);
            await queryRunner.commitTransaction();
            return result;
        } catch (error) {
            await queryRunner.rollbackTransaction();
            console.log(error);
            throw error
        } finally {
            await queryRunner.release();
        }
    }
}