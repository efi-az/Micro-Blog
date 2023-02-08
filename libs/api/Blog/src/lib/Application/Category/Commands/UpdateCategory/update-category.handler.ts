import { CategoryCommandRepository } from '../../../../Infrastructure/Category/Repository/Commands/category-command.repository';
import { Inject } from '@nestjs/common';
import { DataSource, QueryRunner } from 'typeorm';
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { BaseTransaction, POSTGRES_CONST } from "@project/api/core";
import { CategoryEntity } from '../../../../Infrastructure/Category/Entity/category.entity';
import { UpdateCategoryCommand } from '../../../command/../Category/Commands/UpdateCategory/update-category.command';
import { UpdateCategoryDto } from '../../../../Domain/category/dtos/update-category.dto';
import { CategoryQueryRepository } from '../../../../Infrastructure/Category/Repository/Queries/category-query.repository';
import { CategoryImplement } from '../../../../Domain/category/category';

@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryHandler extends BaseTransaction<UpdateCategoryDto, CategoryEntity> implements ICommandHandler<UpdateCategoryCommand, CategoryEntity> {
    constructor(
        @Inject(POSTGRES_CONST) private postgresDataSource: DataSource,
        private categoryCommandRep: CategoryCommandRepository,
        private categoryQueryRep: CategoryQueryRepository,
        private publisher: EventPublisher,
    ) {
        super(postgresDataSource)
    }

    execute(command: UpdateCategoryCommand): Promise<CategoryEntity> {
        const UpdateBlogDto: UpdateCategoryDto = { categoryId: command.categoryId, ...command.updateCategoryDto }
        return this.run(UpdateBlogDto)
    }

    async executeTransaction(data: UpdateCategoryDto, queryRunner: QueryRunner): Promise<CategoryEntity> {
        const findCategory = await this.categoryQueryRep.findOneEntity(data.categoryId)
        const category = this.publisher.mergeObjectContext(new CategoryImplement(findCategory))
        const updateEntity = category.update(data)
        return this.categoryCommandRep.updateEntity(updateEntity, queryRunner);
    }


}