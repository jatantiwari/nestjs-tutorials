import { Body, Controller, Get, HttpCode, Param, Post, Redirect } from "@nestjs/common";
import { CatsServices } from "./cats.service";
import { CreateCatsDto } from "./cats.dto";
import { Cats } from "./cats.interface";

// the @Controller() decorator, which is required to define a basic controller.
// The @Controller decorator can take a host option to require that the HTTP host of the incoming requests matches some specific value.
// @Controller({host:'localhost:3000'})
@Controller('cats')
export class CatController{
  // The @Get() HTTP request method decorator 
  constructor(private catsService: CatsServices){}

  @Post() //Post method
  // @HttpCode(204) Response
  async create(@Body() createCatsDto:CreateCatsDto){
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