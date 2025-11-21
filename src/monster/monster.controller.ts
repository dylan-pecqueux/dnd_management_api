import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { CreateMonsterDto } from './dto/create-monster.dto';
import { UpdateMonsterDto } from './dto/update-monster.dto';

@Controller('monster')
export class MonsterController {
  constructor(private readonly monsterService: MonsterService) {}

  @Post()
  create(@Body() createMonsterDto: CreateMonsterDto) {
    return this.monsterService.create(createMonsterDto);
  }

  @Get()
  findAll() {
    return this.monsterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.monsterService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMonsterDto: UpdateMonsterDto) {
    return this.monsterService.update(id, updateMonsterDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.monsterService.remove(+id);
  }
}
