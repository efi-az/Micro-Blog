import { AppConfigEnum } from './app-config.enum';
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) { }

  get mode(): string {
    return this.configService.get<string>(AppConfigEnum.MODE)
  }

  get port(): number {
    return parseInt(this.configService.get<string>(AppConfigEnum.PORT))
  }

  get apiGlobalPrefix(): string {
    return this.configService.get<string>(AppConfigEnum.API_PREFIX)
  }
}