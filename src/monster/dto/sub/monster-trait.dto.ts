import { IsString } from 'class-validator';

export class CreateMonsterTraitDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
