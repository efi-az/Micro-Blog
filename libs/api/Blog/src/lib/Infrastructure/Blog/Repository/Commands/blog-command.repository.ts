import { BlogDomain } from '../../../../Domain/blog/blog.domain';
import { ICommandRepository, POSTGRES_CONST } from '@project/api/core';
import { Inject, Injectable } from "@nestjs/common";
import { DataSource, QueryRunner, Repository } from "typeorm";
import { BlogEntity } from '../../Entity/blog.entity';
import { CreateBlogDto } from '../../../../Domain/blog/dtos/create-blog.dto';

@Injectable()
export class BlogCommandRepository extends Repository<BlogEntity> implements ICommandRepository<BlogEntity, CreateBlogDto, string>{
    constructor(@Inject(POSTGRES_CONST) private dataSource: DataSource) {
        super(BlogEntity, dataSource.createEntityManager());
    }

    async createEntity(createEntityDto: CreateBlogDto, queryRunner?: QueryRunner): Promise<BlogEntity> {
        const createDto = new BlogEntity()
        createDto.content = createEntityDto.content
        createDto.slug = createEntityDto.slug
        createDto.summary = createEntityDto.summary
        createDto.tags = createEntityDto.tags
        createDto.title = createEntityDto.title
        createDto.objCategory = createEntityDto.categoryId
        if (queryRunner) return await queryRunner.manager.save(createDto)
        return await this.save(await this.create(createDto))
    }

    deleteEntity(entityId: string, queryRunner?: QueryRunner): Promise<any> {
        throw new Error('Method not implemented.');
    }

    async updateEntity(updateEntity: BlogDomain, queryRunner?: QueryRunner): Promise<BlogEntity> {
        if (queryRunner) return await queryRunner.manager.save(BlogEntity, updateEntity)
        return await this.save(updateEntity)
    }

}