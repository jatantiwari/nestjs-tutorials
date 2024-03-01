import { Module } from "@nestjs/common";
import { CatController } from "./cats.controller";
import { CatsServices } from "./cats.service";

@Module({
  controllers:[CatController],
  providers:[CatsServices]
})
export class CatsModule {}