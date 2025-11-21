import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Monster } from "./monster.entity";

@Entity()
export class MonsterSense {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Monster, (m) => m.senses, { onDelete: 'CASCADE' })
  monster: Monster;

  @Column()
  name: string;
}
