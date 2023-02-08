import { CategoryEntity } from '@project/api/blog';
import { ApiProperty } from '@nestjs/swagger';
import { BlogDomain } from "../blog.domain";

export class CreateBlogDto extends BlogDomain {
    @ApiProperty({ type: 'string' })
    categoryId: CategoryEntity
}