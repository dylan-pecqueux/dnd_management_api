import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MonsterSense } from "./monster-sense.entity";
import { MonsterAbility } from "./monster-ability.entity";
import { MonsterTrait } from "./monster-trait.entity";
import { MonsterAction } from "./monster-action.entity";
import { MonsterLegendaryAction } from "./monster-legendary-action.entity";

@Entity()
export class Monster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  size: string;

  @Column({ name: 'creature_type', nullable: true })
  creatureType: string;

  @Column({ nullable: true })
  alignment: string;

  @Column({ name: 'armor_class', nullable: true })
  armorClass: number;

  @Column({ name: 'armor_desc', nullable: true })
  armorDesc: string;

  @Column({ name: 'hit_points', nullable: true })
  hitPoints: number;

  @Column({ name: 'hit_dice', nullable: true })
  hitDice: string;

  @Column({ nullable: true })
  speed: string;

  @Column({ name: 'challenge_rating', nullable: true })
  challengeRating: string;

  @Column({ nullable: true })
  languages: string;

  @Column({ name: 'initiative_modifier', nullable: true })
  initiativeModifier: string;

  @Column({ nullable: true })
  gear: string;

  @Column({ name: 'image_url', nullable: true })
  imageUrl: string;

  @Column({ nullable: true })
  source: string;

  @OneToOne(() => MonsterAbility, (a) => a.monster, { cascade: true })
  ability: MonsterAbility;

  @OneToMany(() => MonsterSense, (s) => s.monster, { cascade: true })
  senses: MonsterSense[];

  @OneToMany(() => MonsterTrait, (t) => t.monster, { cascade: true })
  traits: MonsterTrait[];

  @OneToMany(() => MonsterAction, (a) => a.monster, { cascade: true })
  actions: MonsterAction[];

  @OneToMany(() => MonsterLegendaryAction, (l) => l.monster, { cascade: true })
  legendaryActions: MonsterLegendaryAction[];
}
