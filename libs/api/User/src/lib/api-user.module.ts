import { ApiCoreModule } from '@project/api/core';
import { Module } from '@nestjs/common';
import { USER_PROVIDERS } from './providers';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from './Api/Controllers/user.controller';

@Module({
  imports: [CqrsModule, ApiCoreModule],
  controllers: [UserController],
  providers: USER_PROVIDERS,
})
export class ApiUserModule { }
