import { Injectable } from '@nestjs/common';
import { CreateAdventurerDto } from './dto/create-adventurer.dto';
import { UpdateAdventurerDto } from './dto/update-adventurer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Adventurer } from './entities/adventurer.entity';

@Injectable()
export class AdventurerService {
  constructor(
    @InjectRepository(Adventurer)
    private readonly adventurersRepository: Repository<Adventurer>
  ) {}

  async create(createAdventurerDto: CreateAdventurerDto): Promise<Adventurer> {
    const adventurer = this.adventurersRepository.create(createAdventurerDto as Partial<Adventurer>);
    return this.adventurersRepository.save(adventurer);
  }

  async findAll(): Promise<Adventurer[]> {
    return this.adventurersRepository.find({ order: { name: 'ASC' } });
  }

  async findOne(id: number): Promise<Adventurer> {
    const adventurer = await this.adventurersRepository.findOne({ where: { id } });

    if (!adventurer) {
      throw new Error(`Adventurer #${id} not found`);
    }

    return adventurer;
  }

  async update(id: number, updateAdventurerDto: UpdateAdventurerDto): Promise<Adventurer> {
    const adventurer = await this.findOne(id);

    Object.assign(adventurer, updateAdventurerDto);

    await this.adventurersRepository.save(adventurer);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const adventurer = await this.findOne(id);
    await this.adventurersRepository.remove(adventurer);
  }
}
