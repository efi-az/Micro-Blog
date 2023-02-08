import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Provider } from '@nestjs/common';

export const POSTGRES_CONST = Symbol("POSTGRES_CONST")

export const PostgresProvider: Provider = {
    provide: POSTGRES_CONST,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
        const postgresDataSource = new DataSource(configService.get('postgres'))
        return await postgresDataSource.initialize()
    },
}