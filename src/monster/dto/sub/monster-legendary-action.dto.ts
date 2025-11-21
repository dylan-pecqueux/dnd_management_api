import { IsString } from 'class-validator';

export class CreateMonsterLegendaryActionDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
