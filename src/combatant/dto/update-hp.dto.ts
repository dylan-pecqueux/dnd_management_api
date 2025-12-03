import { IsNumber, IsOptional, IsString, isString } from 'class-validator';

export class UpdateHpDto {
  @IsNumber()
  hpChange: number;

  @IsString()
  @IsOptional()
  damageType: string;
}
