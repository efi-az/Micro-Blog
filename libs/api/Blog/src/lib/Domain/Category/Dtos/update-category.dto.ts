import { ApiHideProperty } from '@nestjs/swagger';
import { CategoryDomain } from '../category.domain';

export class UpdateCategoryDto extends CategoryDomain {
    @ApiHideProperty()
    categoryId: string
}