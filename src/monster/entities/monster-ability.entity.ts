import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Monster } from "./monster.entity";

@Entity()
export class MonsterAbility {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Monster, (m) => m.ability, { onDelete: 'CASCADE' })
  @JoinColumn()
  monster: Monster;

  @Column({ nullable: true }) str: number;
  @Column({ nullable: true }) dex: number;
  @Column({ nullable: true }) con: number;
  @Column({ nullable: true }) int: number;
  @Column({ nullable: true }) wis: number;
  @Column({ nullable: true }) cha: number;

  @Column({ nullable: true }) str_mod: number;
  @Column({ nullable: true }) dex_mod: number;
  @Column({ nullable: true }) con_mod: number;
  @Column({ nullable: true }) int_mod: number;
  @Column({ nullable: true }) wis_mod: number;
  @Column({ nullable: true }) cha_mod: number;

  @Column({ nullable: true }) str_save: number;
  @Column({ nullable: true }) dex_save: number;
  @Column({ nullable: true }) con_save: number;
  @Column({ nullable: true }) int_save: number;
  @Column({ nullable: true }) wis_save: number;
  @Column({ nullable: true }) cha_save: number;
}
