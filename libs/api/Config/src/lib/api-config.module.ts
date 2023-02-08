import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppConfigService } from "./app/app-config.service";
import { SwaggerConfigService } from './swagger/swagger-config.service';
import { validationSchema } from './validate/env.validation';

import appConfiguration from "./app/app-config"
import swaggerConfiguration from "./swagger/swagger-config"
import postgresConfiguration from "./database/postgres.config"
import jwtConfiguration from "./jwt/jwt.config"

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: `${process.cwd()}/libs/api/config/src/lib/envs/.${process.env.NODE_ENV}.env`,
        load: [appConfiguration, swaggerConfiguration, postgresConfiguration, jwtConfiguration],
        validationSchema
    })],
    providers: [AppConfigService, SwaggerConfigService],
})
export class ApiConfigModule {}
