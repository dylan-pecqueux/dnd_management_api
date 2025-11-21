import { Injectable } from '@nestjs/common';
import { ConditionType } from './entities/condition-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConditionTypeService {
  constructor(
    @InjectRepository(ConditionType)
    private repo: Repository<ConditionType>,
  ) {}

  async getOrCreate(name: string): Promise<ConditionType> {
    let type = await this.repo.findOne({ where: { name } });
    if (!type) {
      type = this.repo.create({ name });
      type = await this.repo.save(type);
    }
    return type;
  }
}
