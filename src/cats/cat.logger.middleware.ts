import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class CatsLoggerMiddleware implements NestMiddleware{
//   use(req: Request, res:Response , next: NextFunction) {
//     console.log('Request...')
//     next()
//   }
// } 

//we can also use as function
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
};

