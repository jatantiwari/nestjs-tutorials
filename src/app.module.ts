// The root application module of the application

import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
// import { CatsLoggerMiddleware } from './cats/cat.logger.middleware';
import { CatController } from './cats/cats.controller';
import { logger } from './cats/cat.logger.middleware';

@Module({
  imports:[CatsModule],
  controllers: [AppController],
  providers:[AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    // .apply(CatsLoggerMiddleware)
    // // .forRoutes('cats') middle ware wil work for cats path
    // // .forRoutes({path:'cats',method:RequestMethod.GET}) //middleware will work for only get method is cats path
    // // We can also exclude routes
    // .exclude(
    //   { path: 'cats', method: RequestMethod.POST },
    //   'cats/(.*)',
    // )
    // .forRoutes(CatController);

    // We can also use it as function
    .apply(logger)
    .exclude({path:'cats',method:RequestMethod.POST})
    .forRoutes(CatController);
  }
}
