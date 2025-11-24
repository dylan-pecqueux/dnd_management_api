import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'class-transformer';
import { Combatant } from './entities/combatant.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Combatant])],
})
export class CombatantModule {}
