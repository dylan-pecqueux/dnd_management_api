import { Module } from '@nestjs/common';
import { EncounterService } from './encounter.service';
import { EncounterController } from './encounter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encounter } from './entities/encounter.entity';
import { Combatant } from 'src/combatant/entities/combatant.entities';
import { Adventurer } from 'src/adventurer/entities/adventurer.entity';
import { Monster } from 'src/monster/entities/monster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Encounter, Combatant, Adventurer, Monster])],
  controllers: [EncounterController],
  providers: [EncounterService],
})
export class EncounterModule {}
