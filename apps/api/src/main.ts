import { AppConfigService, SwaggerConfigService } from '@project/api/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter, ResponseSuccessInterceptor } from '@project/api/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfig = app.get<AppConfigService>(AppConfigService);
  const swaggerConfig = app.get<SwaggerConfigService>(SwaggerConfigService);
  if (appConfig.mode == 'developer') {
    swaggerConfig.initialize(app);
  }

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // app.setGlobalPrefix(appConfig.apiGlobalPrefix);
  app.useGlobalInterceptors(new ResponseSuccessInterceptor());

  const adapterHost = app.get<HttpAdapterHost>(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(adapterHost))

  await app.listen(appConfig.port);

  Logger.log(
    `🚀 Application is running on: http://localhost:${appConfig.port}/${appConfig.apiGlobalPrefix}`
  );
}

bootstrap();
