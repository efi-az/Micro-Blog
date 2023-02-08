import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { CategoryEntity } from "../../../Infrastructure/Category/Entity/category.entity";
import { BlogDomain } from "../blog.domain";

export class UpdateBlogDto extends BlogDomain {
    @ApiHideProperty()
    blogId: string

    @ApiProperty({ type: 'string' })
    categoryId: CategoryEntity
}