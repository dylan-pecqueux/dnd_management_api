import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Monster } from '../../monster/entities/monster.entity';

@Entity()
export class ConditionType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Monster, (m) => m.conditionImmunities)
  immuneMonsters: Monster[];
}