import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MonsterService } from './monster.service';
import { MonsterController } from './monster.controller';

import { Monster } from './entities/monster.entity';
import { MonsterAbility } from './entities/monster-ability.entity';
import { MonsterSkill } from './entities/monster-skill.entity';
import { MonsterSense } from './entities/monster-sense.entity';
import { MonsterTrait } from './entities/monster-trait.entity';
import { MonsterAction } from './entities/monster-action.entity';
import { MonsterLegendaryAction } from './entities/monster-legendary-action.entity';

import { DamageType } from '../damage-type/entities/damage-type.entity';
import { ConditionType } from '../condition-type/entities/condition-type.entity';
import { MonsterReaction } from './entities/monster-reaction.entity';
import { DamageTypeModule } from 'src/damage-type/damage-type.module';
import { ConditionTypeModule } from 'src/condition-type/condition-type.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Monster,
      MonsterAbility,
      MonsterSkill,
      MonsterSense,
      MonsterReaction,
      MonsterTrait,
      MonsterAction,
      MonsterLegendaryAction,
    ]),
    DamageTypeModule,
    ConditionTypeModule,
  ],
  controllers: [MonsterController],
  providers: [MonsterService],
})
export class MonsterModule {}
