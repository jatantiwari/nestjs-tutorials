import { Body, Controller, Get, HttpCode, Injectable, Param, ParseIntPipe, Post, Redirect } from "@nestjs/common";
import { CatsServices } from "./cats.service";
import { CreateCatsDto } from "./dto/cats.dto";
import { Cats } from "./interface/cats.interface";

// the @Controller() decorator, which is required to define a basic controller.
// The @Controller decorator can take a host option to require that the HTTP host of the incoming requests matches some specific value.
// @Controller({host:'localhost:3000'})
@Controller('cats')
@Injectable()
export class CatController{
  // The @Get() HTTP request method decorator 
  constructor(private catsService: CatsServices){}

  @Post() //Post method
  // @HttpCode(204) Response
  // Built-in Pipes- using pipes we can validate out parameters
  async create(@Body('age',ParseIntPipe) createCatsDto:CreateCatsDto){
    this.catsService.create(createCatsDto)
  }
  @Get() //Get method
  // @Redirect("https://www.youtube.com",302) //Redirect 

  async findAll():Promise<Cats[]>{
    return this.catsService.findAll();
  }

  @Get(':id') //Get method
  // @Redirect("https://www.youtube.com",302) //Redirect 
  find(@Param() params: any):string{
    return `this action returns all cats ${params.id}`
  }


}