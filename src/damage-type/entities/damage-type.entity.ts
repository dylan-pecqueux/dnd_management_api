import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Monster } from '../../monster/entities/monster.entity';

@Entity()
export class DamageType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => Monster, (m) => m.damageResistances)
  resistantMonsters: Monster[];

  @ManyToMany(() => Monster, (m) => m.damageImmunities)
  immuneMonsters: Monster[];
}