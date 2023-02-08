import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { POSTGRES_CONST } from '@project/api/core';
import { DataSource } from 'typeorm';
import { BlogEntity } from '../../../../Infrastructure/Blog/Entity/blog.entity';
import { BlogQueryRepository } from '../../../../Infrastructure/Blog/Repository/Queries/blog-query.repository';
import { GetBlogsQuery } from './get-blogs-list.query';

@QueryHandler(GetBlogsQuery)
export class GetBlogsHandler implements IQueryHandler<GetBlogsQuery> {
    constructor(
        private blogService: BlogQueryRepository,
        @Inject(POSTGRES_CONST) private postgresDataSource: DataSource
    ) { }

    execute(query: GetBlogsQuery): Promise<BlogEntity[]> {
        return this.blogService.findAllEntities()
    }

}
