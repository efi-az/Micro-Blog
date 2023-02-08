import { Inject } from '@nestjs/common';
import { DataSource, QueryRunner } from 'typeorm';
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { BaseTransaction, POSTGRES_CONST } from "@project/api/core";
import { CreateBlogDto } from "../../../../Domain/blog/dtos/create-blog.dto";
import { BlogEntity } from "../../../../Infrastructure/Blog/Entity/blog.entity";
import { CreateBlogCommand } from './create-blog.command';
import { BlogCommandRepository } from '../../../../Infrastructure/Blog/Repository/Commands/blog-command.repository';
import { BlogImplement } from '../../../../Domain/blog/blog';

@CommandHandler(CreateBlogCommand)
export class CreateBlogHandler extends BaseTransaction<CreateBlogDto, BlogEntity> implements ICommandHandler<CreateBlogCommand, BlogEntity> {
    constructor(
        @Inject(POSTGRES_CONST) private postgresDataSource: DataSource,
        private blogRep: BlogCommandRepository,
        private publisher: EventPublisher,
    ) {
        super(postgresDataSource)
    }

    execute(command: CreateBlogCommand): Promise<BlogEntity> {
        return this.run(command.createBlogDto)
    }

    async executeTransaction(data: CreateBlogDto, queryRunner: QueryRunner): Promise<BlogEntity> {

        const createdBlog = await this.blogRep.createEntity(data, queryRunner);
        
        const blog = this.publisher.mergeObjectContext(new BlogImplement(createdBlog))
        
        blog.create()
        blog.commit()

        return createdBlog 
    }


}