import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Cats } from "./interface/cats.interface";

@Injectable()
export class CatsServices{
  private readonly cats: Cats[] = [];
  create(cat:Cats){
    console.log(cat.name!=undefined)
    if(cat.name==undefined || cat.breed==undefined ||cat.age==undefined || cat.id==undefined){
      throw new HttpException('Not Acceptable',HttpStatus.NOT_ACCEPTABLE)
    }
    this.cats.push(cat);

    // throw new HttpException('Forbidden',HttpStatus.FORBIDDEN)
    // we can also send custom message
    // throw new HttpException({
    //   status: HttpStatus.FORBIDDEN,
    //   message: 'This is a custom message',
    // }, HttpStatus.FORBIDDEN, {
    //   cause: cat
    // });

    // throw new BadRequestException('Something bad happened', { cause: new Error(), description: 'Some error description' })
  }

  findAll():Cats[]{
    return this.cats
  }
}