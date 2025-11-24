import { Module } from '@nestjs/common';
import { AdventurerService } from './adventurer.service';
import { AdventurerController } from './adventurer.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adventurer } from './entities/adventurer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Adventurer])],
  controllers: [AdventurerController],
  providers: [AdventurerService],
})
export class AdventurerModule {}
