import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Documentation')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Azura')
    .addBearerAuth()
    .build();
    ////////////

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });



  await app.listen(4000);
}
bootstrap();

