import { ApiTags } from "@nestjs/swagger"
import { Controller, Post, Body, Param, Put, Get } from '@nestjs/common'
import { BlogEntity } from '../../Infrastructure/Blog/Entity/blog.entity';
import { CreateBlogDto } from '../../Domain/blog/dtos/create-blog.dto';
import { UpdateBlogDto } from '../../Domain/blog/dtos/update-blog.dto';
import { UpdateBlogCommand } from '../../Application/Blog/Commands/UpdateBlog/update-blog.command';
import { CreateBlogCommand } from '../../Application/Blog/Commands/CreateBlog/create-blog.command';
import { GetBlogsQuery } from '../../Application/Blog/Queries/GetBlogsList/get-blogs-list.query';
import { BaseController } from "@project/api/core";

@ApiTags("BLOG")
@Controller("blog")
export class BlogController extends BaseController {

    @Post()
    create(@Body() createDto: CreateBlogDto): Promise<BlogEntity> {
        return this.commandBus.execute(new CreateBlogCommand(createDto))
    }

    @Put(':blogId')
    update(@Body() updateDto: UpdateBlogDto, @Param("blogId") blogId: string): Promise<BlogEntity> {
        return this.commandBus.execute(new UpdateBlogCommand(updateDto, blogId))
    }

    @Get("all")
    getAll(): Promise<BlogEntity[]> {
        return this.queryBus.execute(new GetBlogsQuery())
    }

}