import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAdventurerDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  class?: string;

  @IsOptional()
  @IsNumber()
  level?: number;

  @IsString()
  @IsOptional()
  race?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
