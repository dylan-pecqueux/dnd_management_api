import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Monster } from './monster.entity';

@Entity()
export class MonsterTrait {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Monster, (m) => m.traits, { onDelete: 'CASCADE' })
  monster: Monster;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;
}
