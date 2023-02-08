import { DataSource } from 'typeorm';
import { QueryRunner } from 'typeorm';
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { UpdateBlogDto } from "../../../../Domain/blog/dtos/update-blog.dto";
import { BlogEntity } from "../../../../Infrastructure/Blog/Entity/blog.entity";
import { BaseTransaction, POSTGRES_CONST } from '@project/api/core';
import { Inject } from '@nestjs/common';
import { UpdateBlogCommand } from './update-blog.command';
import { BlogQueryRepository } from '../../../../Infrastructure/Blog/Repository/Queries/blog-query.repository';
import { BlogCommandRepository } from '../../../../Infrastructure/Blog/Repository/Commands/blog-command.repository';
import { BlogImplement } from '../../../../Domain/blog/blog';

@CommandHandler(UpdateBlogCommand)
export class UpdateBlogHandler extends BaseTransaction<UpdateBlogDto, BlogEntity> implements ICommandHandler<UpdateBlogCommand> {
    constructor(
        @Inject(POSTGRES_CONST) private postgresDataSource: DataSource,
        private blogQueryRep: BlogQueryRepository,
        private blogCommandRep: BlogCommandRepository,
        private publisher: EventPublisher,
    ) { super(postgresDataSource) }

    async execute(command: UpdateBlogCommand): Promise<BlogEntity> {
        const UpdateBlogDto: UpdateBlogDto = { blogId: command.blogId, ...command.updateBlogDto }
        return this.run(UpdateBlogDto)
    }

    async executeTransaction(data: UpdateBlogDto, queryRunner: QueryRunner): Promise<BlogEntity> {
        const findBlog = await this.blogQueryRep.findOneEntity(data.blogId)
        const blog = this.publisher.mergeObjectContext(new BlogImplement(findBlog))
        const updateEntity = blog.update(data)
        return this.blogCommandRep.updateEntity(updateEntity, queryRunner);
    }

}