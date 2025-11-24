import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdventurerService } from './adventurer.service';
import { CreateAdventurerDto } from './dto/create-adventurer.dto';
import { UpdateAdventurerDto } from './dto/update-adventurer.dto';

@Controller('adventurer')
export class AdventurerController {
  constructor(private readonly adventurerService: AdventurerService) {}

  @Post()
  create(@Body() createAdventurerDto: CreateAdventurerDto) {
    return this.adventurerService.create(createAdventurerDto);
  }

  @Get()
  findAll() {
    return this.adventurerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adventurerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateAdventurerDto: UpdateAdventurerDto) {
    return this.adventurerService.update(id, updateAdventurerDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adventurerService.remove(id);
  }
}
