import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Monster } from "./monster.entity";

@Entity()
export class MonsterSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Monster, (m) => m.skills, { onDelete: 'CASCADE' })
  monster: Monster;

  @Column()
  name: string;

  @Column()
  value: string;
}
