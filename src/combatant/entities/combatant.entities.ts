import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Monster } from 'src/monster/entities/monster.entity';
import { Adventurer } from 'src/adventurer/entities/adventurer.entity';
import { Encounter } from 'src/encounter/entities/encounter.entity';

@Entity()
export class Combatant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Encounter, e => e.combatants)
  encounter: Encounter;

  @ManyToOne(() => Monster, { nullable: true })
  monster?: Monster;

  @ManyToOne(() => Adventurer, { nullable: true })
  adventurer?: Adventurer;

  @Column({ nullable: true })
  name: string;

  @Column()
  initiative: number;

  @Column()
  currentHp: number;

  @Column()
  maxHp: number;

  @Column({ default: 0 })
  tempHp: number;

  @Column()
  isMonster: boolean;

  @Column({ default: false })
  isDead: boolean;
}
