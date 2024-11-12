import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('NestJs Materclass - Blog app API')
    .setDescription('Use the base API URL as http://localhost:3000/v1')
    .setTermsOfService('http://localhost:3000/v1')
    .setLicense(
      'MIT License',
      'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt',
    )
    .addServer('http://localhost:3000/v1')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/api', app, document);

  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);

  await app.listen(3000, () => {
    Logger.log(
      ' 🚀 Application is running on: http://localhost:' +
        3000 +
        '/' +
        globalPrefix,
    );
  });
}
bootstrap();
