import { ICommand } from "@nestjs/cqrs";
import { CreateCategoryDto } from "../../../../Domain/category/dtos/create-category.dto";

export class CreateCategoryCommand implements ICommand {
    constructor(
        public readonly createCategoryDto: CreateCategoryDto,
    ) { }
}