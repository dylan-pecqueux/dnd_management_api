import { IsString } from 'class-validator';

export class CreateMonsterActionDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
