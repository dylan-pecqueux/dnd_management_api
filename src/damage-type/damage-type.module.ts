// damage-type.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DamageTypeService } from './damage-type.service';
import { DamageType } from './entities/damage-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DamageType])],
  providers: [DamageTypeService],
  exports: [DamageTypeService],
})
export class DamageTypeModule {}
