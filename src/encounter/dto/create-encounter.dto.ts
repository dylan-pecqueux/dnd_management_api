import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEncounterDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  turn: number;

  @IsNumber()
  @IsOptional()
  damageDealToMonsters: number;

  @IsNumber()
  @IsOptional()
  damageDealToAdventurers: number;
}
