import { Module } from '@nestjs/common';
import { ApiCoreModule } from '@project/api/core';
import { CqrsModule } from '@nestjs/cqrs';
import { BLOG_PROVIDERS } from './providers';
import { BlogController } from './Api/Controllers/blog.controller';
import { CategoryController } from './Api/Controllers/category.controller';

@Module({
  imports: [CqrsModule, ApiCoreModule],
  controllers: [BlogController, CategoryController],
  providers: BLOG_PROVIDERS,
})
export class ApiBlogModule {}
