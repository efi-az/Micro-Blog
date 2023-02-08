import { CategoryEntity } from '../../Entity/category.entity';
import { IQueryRepository, POSTGRES_CONST } from '@project/api/core';
import { Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class CategoryQueryRepository extends Repository<CategoryEntity> implements IQueryRepository<CategoryEntity, string>{
    constructor(@Inject(POSTGRES_CONST) private dataSource: DataSource) {
        super(CategoryEntity, dataSource.createEntityManager());
    }

    async findOneEntity(entityId: string): Promise<CategoryEntity> {
        const query = await this.createQueryBuilder("category")
            .where("category.id = :id", { id: entityId })
            .getOne()
        return query
    }

    async findAllEntities(): Promise<CategoryEntity[]> {
        const query = await this.createQueryBuilder("category")
            .getMany()
        return query
    }

}