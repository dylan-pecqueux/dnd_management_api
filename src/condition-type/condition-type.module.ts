import { Module } from '@nestjs/common';
import { ConditionTypeService } from './condition-type.service';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConditionType } from './entities/condition-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConditionType])],
  providers: [ConditionTypeService],
  exports: [ConditionTypeService],
})
export class ConditionTypeModule {}
