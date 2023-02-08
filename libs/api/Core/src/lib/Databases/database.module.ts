import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PostgresProvider } from "./postgres/postgres.data-source";

@Module({
  imports: [ConfigModule],
  providers: [PostgresProvider],
  exports: [PostgresProvider]
})
export class DatabaseModule { }
