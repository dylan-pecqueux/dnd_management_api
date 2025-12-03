import { Combatant } from 'src/combatant/entities/combatant.entities';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class Encounter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  name: string;

  @Column({ default: 1})
  turn: number;

  @Column({ nullable: true, default: 0 })
  damageDealToMonsters: number;

  @Column({ nullable: true, default: 0 })
  damageDealToAdventurers: number;

  @OneToMany(() => Combatant, combatant => combatant.encounter, { cascade: true })
  combatants: Combatant[];
}
