import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DamageType } from './entities/damage-type.entity';

@Injectable()
export class DamageTypeService {
  constructor(
    @InjectRepository(DamageType)
    private repo: Repository<DamageType>,
  ) {}

  async getOrCreate(name: string): Promise<DamageType> {
    let type = await this.repo.findOne({ where: { name } });
    if (!type) {
      type = this.repo.create({ name });
      type = await this.repo.save(type);
    }
    return type;
  }
}
