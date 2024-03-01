import { Injectable } from "@nestjs/common";
import { Cats } from "./interface/cats.interface";

@Injectable()
export class CatsServices{
  private readonly cats: Cats[] = [];
  create(cat:Cats){
    this.cats.push(cat);
  }

  findAll():Cats[]{
    return this.cats
  }
}