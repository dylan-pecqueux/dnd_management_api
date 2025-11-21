import { IsString } from "class-validator";

export class CreateMonsterReactionDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}