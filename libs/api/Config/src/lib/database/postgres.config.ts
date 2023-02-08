import { join } from 'path';
import { registerAs } from "@nestjs/config";
import { BlogEntity, CategoryEntity } from '@project/api/blog';
import { ProfileEntity, UserEntity } from '@project/api/user';

export default registerAs("postgres", () => ({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  // autoLoadEntities: true,
  entities:  [
    BlogEntity,
    CategoryEntity,
    UserEntity,
    ProfileEntity,
    // `${join(process.cwd(), 'apps', 'api')}/**/*.entity{.ts,.js}`,
    // `${join(process.cwd(), 'libs', 'api')}/**/*.entity{.ts,.js}`
  
  ],
  synchronize: true
}))