import { CategoryCommandRepository } from '../Infrastructure/Category/Repository/Commands/category-command.repository';
import { BlogCommandRepository } from "../Infrastructure/Blog/Repository/Commands/blog-command.repository";
import { BlogQueryRepository } from "../Infrastructure/Blog/Repository/Queries/blog-query.repository";
import { CategoryQueryRepository } from '../Infrastructure/Category/Repository/Queries/category-query.repository';

export const BlogRepositoryProviders: any[] = [
    BlogQueryRepository, BlogCommandRepository, CategoryCommandRepository, CategoryQueryRepository,
]