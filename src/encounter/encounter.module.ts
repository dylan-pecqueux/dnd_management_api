import { Module } from '@nestjs/common';
import { EncounterService } from './encounter.service';
import { EncounterController } from './encounter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encounter } from './entities/encounter.entity';
import { Combatant } from 'src/combatant/entities/combatant.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Encounter, Combatant])],
  controllers: [EncounterController],
  providers: [EncounterService],
})
export class EncounterModule {}
