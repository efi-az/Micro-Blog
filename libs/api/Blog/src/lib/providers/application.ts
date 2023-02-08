import { CreateCategoryHandler } from '../Application/Category/Commands/CreateCategory/create-category.handler';
import { CreateBlogHandler } from "../Application/Blog/Commands/CreateBlog/create-blog.handler";
import { UpdateBlogHandler } from "../Application/Blog/Commands/UpdateBlog/update-blog.handler";
import { BlogDeletedHandler } from "../Application/Blog/Event/BlogDeleted/blog-deleted.event";
import { GetBlogsHandler } from "../Application/Blog/Queries/GetBlogsList/get-blogs-list.handler";
import { UpdateCategoryHandler } from '../Application/Category/Commands/UpdateCategory/update-category.handler';
import { BlogCreatedHandler } from '../Application/Blog/Event/BlogCreated/blog-created.handler';

export const BlogApplicationProviders: any[] = [
    CreateBlogHandler, UpdateBlogHandler, GetBlogsHandler, BlogCreatedHandler, BlogDeletedHandler,
    CreateCategoryHandler, UpdateCategoryHandler
]