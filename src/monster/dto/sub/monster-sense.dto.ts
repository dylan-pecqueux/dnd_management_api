import { IsString } from 'class-validator';

export class CreateMonsterSenseDto {
  @IsString()
  name: string;
}
