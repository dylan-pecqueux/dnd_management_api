import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EncounterService } from './encounter.service';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';
import { UpdateHpDto } from 'src/combatant/dto/update-hp.dto';
import { CreateCombatantDto } from 'src/combatant/dto/create-combatant.dto';

@Controller('encounter')
export class EncounterController {
  constructor(private readonly encounterService: EncounterService) {}

  @Post()
  create(@Body() createEncounterDto: CreateEncounterDto) {
    return this.encounterService.create(createEncounterDto);
  }

  @Post(':id/combatant')
  addCombatant(@Param('id', ParseIntPipe) id: number, @Body() combatantDto: CreateCombatantDto) {
    return this.encounterService.addCombatant(id, combatantDto);
  }

  @Get()
  findAll() {
    return this.encounterService.findAllEncounter();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.encounterService.getEncounter(id);
  }

  @Patch('combatant/:id/hp')
  updateHp(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateHpDto) {
    return this.encounterService.updateHp(id, dto);
  }

  @Patch(':id/next-turn')
  nextTurn(@Param('id', ParseIntPipe) id: number) {
    return this.encounterService.nextTurn(id);
  }
}
