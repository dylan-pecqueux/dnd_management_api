import { IsNumber, IsOptional, IsBoolean, IsString } from 'class-validator';

export class CreateCombatantDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  initiative: number;

  @IsNumber()
  maxHp: number;

  @IsNumber()
  currentHp: number;

  @IsBoolean()
  isMonster: boolean;

  @IsNumber()
  @IsOptional()
  tempHp?: number;

  @IsOptional()
  @IsNumber()
  monsterId?: number;

  @IsOptional()
  @IsNumber()
  adventurerId?: number;
}
