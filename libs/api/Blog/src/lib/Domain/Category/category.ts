import { AggregateRoot } from '@nestjs/cqrs';
import { CategoryEntity } from '../../Infrastructure/Category/Entity/category.entity';
import { CategoryDomain } from './category.domain';
import { UpdateCategoryDto } from './dtos/update-category.dto';

export class CategoryImplement extends AggregateRoot implements CategoryDomain {
    name: string
    description: string

    constructor(prop: CategoryEntity) {
        super()
        Object.assign(this, prop)
    }

    update(category: UpdateCategoryDto): CategoryDomain {
        this.name = category.name
        this.description = category.description
        return this
    }

} 