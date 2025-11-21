import { IsNumber, IsOptional } from 'class-validator';

export class CreateMonsterAbilityDto {
  @IsOptional() @IsNumber() str?: number;
  @IsOptional() @IsNumber() dex?: number;
  @IsOptional() @IsNumber() con?: number;
  @IsOptional() @IsNumber() int?: number;
  @IsOptional() @IsNumber() wis?: number;
  @IsOptional() @IsNumber() cha?: number;

  @IsOptional() @IsNumber() str_mod?: number;
  @IsOptional() @IsNumber() dex_mod?: number;
  @IsOptional() @IsNumber() con_mod?: number;
  @IsOptional() @IsNumber() int_mod?: number;
  @IsOptional() @IsNumber() wis_mod?: number;
  @IsOptional() @IsNumber() cha_mod?: number;

  @IsOptional() @IsNumber() str_save?: number;
  @IsOptional() @IsNumber() dex_save?: number;
  @IsOptional() @IsNumber() con_save?: number;
  @IsOptional() @IsNumber() int_save?: number;
  @IsOptional() @IsNumber() wis_save?: number;
  @IsOptional() @IsNumber() cha_save?: number;
}
