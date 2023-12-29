import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { ErrorInterceptor } from './common/interceptors/error.interceptors';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { VERSION_ACTUAL } from './common/constants/api-version.constant';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  });

  app.use(cookieParser());
  app.disable('x-powered-by');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    })
  );
  app.useGlobalInterceptors(new ErrorInterceptor());
  app.setGlobalPrefix(process.env.CONTEXT || '');

  if (process.env.MODE_ENV !== 'prod') {
    /*Swagger editor*/
    const config = new DocumentBuilder()
      .setTitle('Plantilla Api Gateway')
      .setDescription('Documentación de API Plantilla')
      .setVersion(VERSION_ACTUAL)
      .build();
    const options: SwaggerDocumentOptions = {
      ignoreGlobalPrefix: false,
    };
    const document = SwaggerModule.createDocument(app, config, options);
    SwaggerModule.setup('api', app, document);
  }

  const port = process.env.PORT || 6500;

  await app.listen(port);
  const logger = new Logger('API-GATEWAY');
  logger.log(`==== API-GATEWAY CORRIENDO =====`);
}
bootstrap();
