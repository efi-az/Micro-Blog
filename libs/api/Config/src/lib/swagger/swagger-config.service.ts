import { INestApplication, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { SwaggerConfigEnum } from "./swagger-config.enum";

@Injectable()
export class SwaggerConfigService {
  constructor(private configService: ConfigService) { }

  get title(): string {
    return this.configService.get<string>(SwaggerConfigEnum.TITLE)
  }

  get description(): string {
    return this.configService.get<string>(SwaggerConfigEnum.DESCRIPTION)
  }

  get prefix(): string {
    return this.configService.get<string>(SwaggerConfigEnum.PREFIX)
  }

  get version(): string { 
    return this.configService.get<string>(SwaggerConfigEnum.VERSION)
  }

  get tag(): string {
    return this.configService.get<string>(SwaggerConfigEnum.TAG)
  }

  initialize(app: INestApplication) {
    const config = new DocumentBuilder()
      .setTitle(this.title)
      .setDescription(this.description)
      .setVersion(this.version)
      .addTag(this.tag)
      .addBearerAuth({ type: "http", scheme: "bearer", bearerFormat: "JWT", in: "headers" }, "access-token")
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(this.prefix, app, document);
  }
}