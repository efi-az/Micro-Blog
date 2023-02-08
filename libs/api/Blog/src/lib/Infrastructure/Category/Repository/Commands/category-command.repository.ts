import { CategoryDomain } from '../../../../Domain/category/category.domain';
import { CategoryEntity } from '../../Entity/category.entity';
import { ICommandRepository, POSTGRES_CONST } from '@project/api/core';
import { Inject, Injectable } from "@nestjs/common";
import { DataSource, QueryRunner, Repository } from "typeorm";
import { CreateCategoryDto } from '../../../../Domain/category/dtos/create-category.dto';

@Injectable()
export class CategoryCommandRepository extends Repository<CategoryEntity> implements ICommandRepository<CategoryEntity, CreateCategoryDto, string>{
    constructor(@Inject(POSTGRES_CONST) private dataSource: DataSource) {
        super(CategoryEntity, dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateCategoryDto, queryRunner?: QueryRunner): Promise<CategoryEntity> {
        const createDto = new CategoryEntity()
        createDto.name = createEntityDto.name
        createDto.description = createEntityDto.description
        if (queryRunner) return await queryRunner.manager.save(createDto)
        return await this.save(await this.create(createDto))
    }

    deleteEntity(entityId: string, queryRunner?: QueryRunner): Promise<any> {
        throw new Error('Method not implemented.');
    }

    async updateEntity(updateEntity: CategoryDomain, queryRunner?: QueryRunner): Promise<CategoryEntity> {
        if (queryRunner) return await queryRunner.manager.save(CategoryEntity, updateEntity)
        return await this.save(updateEntity)
    }

}