import { CategoryCommandRepository } from '../../../../Infrastructure/Category/Repository/Commands/category-command.repository';
import { Inject } from '@nestjs/common';
import { DataSource, QueryRunner } from 'typeorm';
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { BaseTransaction, POSTGRES_CONST } from "@project/api/core";
import { CreateCategoryCommand } from '../../../command/../Category/Commands/CreateCategory/create-category.command';
import { CreateCategoryDto } from '../../../../Domain/category/dtos/create-category.dto';
import { CategoryEntity } from '../../../../Infrastructure/Category/Entity/category.entity';

@CommandHandler(CreateCategoryCommand)
export class CreateCategoryHandler extends BaseTransaction<CreateCategoryDto, CategoryEntity> implements ICommandHandler<CreateCategoryCommand, CategoryEntity> {
    constructor(
        @Inject(POSTGRES_CONST) private postgresDataSource: DataSource,
        private categoryRep: CategoryCommandRepository,
    ) {
        super(postgresDataSource)
    }

    execute(command: CreateCategoryCommand): Promise<CategoryEntity> {
        return this.run(command.createCategoryDto)
    }

    executeTransaction(data: CreateCategoryDto, queryRunner: QueryRunner): Promise<CategoryEntity> {
        return this.categoryRep.createEntity(data, queryRunner);
    }


}