import { BlogApplicationProviders } from "./application";
import { BlogRepositoryProviders } from "./repository";

export const BLOG_PROVIDERS = BlogApplicationProviders.concat(BlogRepositoryProviders)