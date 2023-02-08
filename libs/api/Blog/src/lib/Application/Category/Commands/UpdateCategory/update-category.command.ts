import { ICommand } from "@nestjs/cqrs";
import { UpdateCategoryDto } from "../../../../Domain/category/dtos/update-category.dto";

export class UpdateCategoryCommand implements ICommand {
    constructor(
        public readonly updateCategoryDto: UpdateCategoryDto,
        public readonly categoryId: string
    ) { }
}