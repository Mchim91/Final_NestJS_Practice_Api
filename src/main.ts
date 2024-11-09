import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'v1';
  app.setGlobalPrefix(globalPrefix);

  await app.listen(3000, () => {
    Logger.log('Listening at http://localhost:' + 3000 + '/' + globalPrefix);
  });
}
bootstrap();
