import { CategoryEntity } from '@project/api/blog';
import { BlogDomain } from './blog.domain';
import { AggregateRoot } from '@nestjs/cqrs';
import { BadRequestException } from '@nestjs/common';
import { BlogEntity } from '../../Infrastructure/Blog/Entity/blog.entity';
import { UpdateBlogDto } from './dtos/update-blog.dto';
import { BlogCreatedEvent } from '../../Application/Blog/Event/BlogCreated/blog-created.event';
import { BlogDeletedEvent } from '../../Application/Blog/Event/BlogDeleted/blog-deleted.handler';

export class BlogImplement extends AggregateRoot implements BlogDomain {
    title: string
    content: string
    tags: string[]
    summary: string
    slug: string
    isLock: boolean
    objCategory: CategoryEntity

    constructor(prop: BlogEntity) {
        super()
        Object.assign(this, prop)
    }

    lock(): void {
        if (this.isLock)
            throw new BadRequestException('Blog is already locked');
        this.isLock = true
    }

    create(): void {
        this.apply(new BlogCreatedEvent());
    }

    update(blog: UpdateBlogDto): BlogDomain {
        this.content = blog.content
        this.slug = blog.slug
        this.summary = blog.summary
        this.tags = blog.tags
        this.title = blog.title
        this.objCategory = blog.categoryId
        return this
    }

    delete(): void {
        this.apply(new BlogDeletedEvent())
    }
} 