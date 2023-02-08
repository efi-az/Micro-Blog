import { ApiConfigModule } from '@project/api/config';
import { Module } from '@nestjs/common';
import { ApiCoreModule } from '@project/api/core';
import { ApiBlogModule } from '@project/api/blog';
import { ApiUserModule } from '@project/api/user';

@Module({
  imports: [ApiCoreModule, ApiConfigModule, ApiBlogModule, ApiUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
