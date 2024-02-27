// The root application module of the application

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cats.controller';
import { CatsServices } from './cats.service';

@Module({
  controllers: [CatController],
  providers:[CatsServices]
})
export class AppModule {}
