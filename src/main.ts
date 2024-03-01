// The entry file of the application which uses the core function NestFactory to create a Nest application instance.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { logger } from './cats/cat.logger.middleware';

async function bootstrap() {
  // NestFactory exposes a few static methods that allow creating an application instance
  const app = await NestFactory.create(AppModule);

  // We can use logger globally using 
  // app.use(logger);
  await app.listen(3000);
}
bootstrap();
