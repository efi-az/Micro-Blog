import { ICommand } from '@nestjs/cqrs';
import { UpdateBlogDto } from "../../../../Domain/blog/dtos/update-blog.dto";

export class UpdateBlogCommand implements ICommand {
    constructor(
        public readonly updateBlogDto: UpdateBlogDto,
        public readonly blogId: string,
    ) { }
}