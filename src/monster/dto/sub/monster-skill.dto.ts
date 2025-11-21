import { IsString } from 'class-validator';

export class CreateMonsterSkillDto {
  @IsString()
  name: string;

  @IsString()
  value: string;
}
