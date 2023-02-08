import { CategoryEntity } from '@project/api/blog';
import { ApiTags } from "@nestjs/swagger"
import { Controller, Post, Body, Param, Put } from '@nestjs/common'
import { UpdateCategoryDto } from '../../Domain/category/dtos/update-category.dto';
import { UpdateCategoryCommand } from '../../Application/Category/Commands/UpdateCategory/update-category.command';
import { CreateCategoryCommand } from '../../Application/Category/Commands/CreateCategory/create-category.command';
import { CreateCategoryDto } from '../../Domain/category/dtos/create-category.dto';
import { BaseController } from '@project/api/core';

@ApiTags("CATEGORY")
@Controller("category")
export class CategoryController extends BaseController {

    @Post()
    create(@Body() createDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.commandBus.execute(new CreateCategoryCommand(createDto))
    }

    @Put(':categoryId')
    update(@Body() updateDto: UpdateCategoryDto, @Param("categoryId") categoryId: string): Promise<CategoryEntity> {
        return this.commandBus.execute(new UpdateCategoryCommand(updateDto, categoryId))
    }

    // @Get("all")
    // async getAll(): Promise<CategoryEntity[]> {
    //     return this.queryBus.execute(new GetCategoriesQuery())
    // }

}