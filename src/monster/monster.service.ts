import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import { Monster } from './entities/monster.entity';
import { CreateMonsterDto } from './dto/create-monster.dto';
import { UpdateMonsterDto } from './dto/update-monster.dto';
import { DamageTypeService } from 'src/damage-type/damage-type.service';
import { ConditionTypeService } from 'src/condition-type/condition-type.service';

@Injectable()
export class MonsterService {
  constructor(
    @InjectRepository(Monster)
    private readonly monstersRepository: Repository<Monster>,
    private readonly damageTypeService: DamageTypeService,
    private readonly conditionTypeService: ConditionTypeService,
  ) {}

  async findAll(): Promise<Monster[]> {
    return this.monstersRepository.find({
      relations: [
        'ability',
        'skills',
        'senses',
        'traits',
        'actions',
        'reactions',
        'legendaryActions',
        'damageResistances',
        'damageImmunities',
        'conditionImmunities',
      ],
      order: { name: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Monster> {
    const monster = await this.monstersRepository.findOne({
      where: { id },
      relations: [
        'ability',
        'skills',
        'senses',
        'traits',
        'actions',
        'reactions',
        'legendaryActions',
        'damageResistances',
        'damageImmunities',
        'conditionImmunities',
      ],
    });

    if (!monster) {
      throw new NotFoundException(`Monster #${id} not found`);
    }

    return monster;
  }

  async create(dto: CreateMonsterDto): Promise<Monster> {
    const monster = this.monstersRepository.create(dto as DeepPartial<Monster>);

    // vérifier résistances aux dégâts
    if (dto.damageResistances?.length) {
      monster.damageResistances = await Promise.all(
        dto.damageResistances.map(name =>
          this.damageTypeService.getOrCreate(name),
        )
      );
    }

    // vérifier immunités aux dégâts
    if (dto.damageImmunities?.length) {
      monster.damageImmunities = await Promise.all(
        dto.damageImmunities.map(name =>
          this.damageTypeService.getOrCreate(name),
        )
      );
    }

    // Vérifier immunités aux conditions
    if (dto.conditionImmunities?.length) {
      monster.conditionImmunities = await Promise.all(
        dto.conditionImmunities.map(name =>
          this.conditionTypeService.getOrCreate(name),
        )
      );
    }

    return this.monstersRepository.save(monster);
  }

  async update(id: number, dto: UpdateMonsterDto): Promise<Monster> {
    const monster = await this.findOne(id);

    Object.assign(monster, dto);

    await this.monstersRepository.save(monster);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const monster = await this.findOne(id);
    await this.monstersRepository.remove(monster);
  }
}
