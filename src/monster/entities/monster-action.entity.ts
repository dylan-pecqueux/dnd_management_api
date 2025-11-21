import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Monster } from './monster.entity';

@Entity()
export class MonsterAction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Monster, (m) => m.actions, { onDelete: 'CASCADE' })
  monster: Monster;

  @Column()
  name: string;

  @Column({ type: 'text' })
  description: string;
}
