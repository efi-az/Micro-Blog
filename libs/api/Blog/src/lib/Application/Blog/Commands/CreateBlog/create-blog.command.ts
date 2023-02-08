import { ICommand } from "@nestjs/cqrs";
import { CreateBlogDto } from "../../../../Domain/blog/dtos/create-blog.dto";

export class CreateBlogCommand implements ICommand {
    constructor(
        public readonly createBlogDto: CreateBlogDto,
    ) { }
}