import { IQueryRepository, POSTGRES_CONST } from '@project/api/core';
import { Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { BlogEntity } from '../../Entity/blog.entity';

@Injectable()
export class BlogQueryRepository extends Repository<BlogEntity> implements IQueryRepository<BlogEntity, string>{
    constructor(@Inject(POSTGRES_CONST) private dataSource: DataSource) {
        super(BlogEntity, dataSource.createEntityManager());
    }

    async findOneEntity(entityId: string): Promise<BlogEntity> {
        const query = await this.createQueryBuilder("blog")
            .where("blog.id = :id", { id: entityId })
            .getOne()
        return query
    }

    async findAllEntities(): Promise<BlogEntity[]> {
        const query = await this.createQueryBuilder("blog")
            .leftJoinAndSelect("blog.objCategory", "category")
            .getMany()
        return query
    }
}