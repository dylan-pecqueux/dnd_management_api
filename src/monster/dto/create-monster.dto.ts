import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateMonsterAbilityDto } from './sub/monster-ability.dto';
import { CreateMonsterSkillDto } from './sub/monster-skill.dto';
import { CreateMonsterSenseDto } from './sub/monster-sense.dto';
import { CreateMonsterTraitDto } from './sub/monster-trait.dto';
import { CreateMonsterActionDto } from './sub/monster-action.dto';
import { CreateMonsterLegendaryActionDto } from './sub/monster-legendary-action.dto';
import { CreateMonsterReactionDto } from './sub/monster-reaction.dto';

export class CreateMonsterDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  size?: string;

  @IsOptional()
  @IsString()
  creatureType?: string;

  @IsOptional()
  @IsString()
  alignment?: string;

  @IsOptional()
  @IsNumber()
  armorClass?: number;

  @IsOptional()
  @IsString()
  armorDesc?: string;

  @IsOptional()
  @IsNumber()
  hitPoints?: number;

  @IsOptional()
  @IsString()
  hitDice?: string;

  @IsOptional()
  @IsString()
  speed?: string;

  @IsOptional()
  @IsString()
  challengeRating?: string;

  @IsOptional()
  @IsString()
  languages?: string;

  @IsOptional()
  @IsString()
  initiativeModifier?: string;

  @IsOptional()
  @IsString()
  gear?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  source?: string;

  // ===== Relations =====

  @IsOptional()
  @ValidateNested()
  @Type(() => CreateMonsterAbilityDto)
  ability?: CreateMonsterAbilityDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMonsterSkillDto)
  skills?: CreateMonsterSkillDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMonsterSenseDto)
  senses?: CreateMonsterSenseDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMonsterTraitDto)
  traits?: CreateMonsterTraitDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMonsterActionDto)
  actions?: CreateMonsterActionDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMonsterReactionDto)
  reactions?: CreateMonsterReactionDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMonsterLegendaryActionDto)
  legendaryActions?: CreateMonsterLegendaryActionDto[];

  // Damage resistances
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  damageResistances?: string[];

  // Damage immunités
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  damageImmunities?: string[];

  // Condition immunités
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  conditionImmunities?: string[];
}
