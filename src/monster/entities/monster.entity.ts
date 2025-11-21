import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { MonsterSense } from "./monster-sense.entity";
import { MonsterAbility } from "./monster-ability.entity";
import { MonsterTrait } from "./monster-trait.entity";
import { MonsterAction } from "./monster-action.entity";
import { MonsterLegendaryAction } from "./monster-legendary-action.entity";
import { MonsterReaction } from "./monster-reaction.entity";
import { MonsterSkill } from "./monster-skill.entity";
import { DamageType } from "src/damage-type/entities/damage-type.entity";
import { ConditionType } from "src/condition-type/entities/condition-type.entity";

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

  @OneToMany(() => MonsterReaction, (r) => r.monster, { cascade: true })
  reactions: MonsterReaction[];

  @OneToMany(() => MonsterSkill, (s) => s.monster, { cascade: true })
  skills: MonsterSkill[];

  // Résistances aux dégâts
  @ManyToMany(() => DamageType, (dt) => dt.resistantMonsters, { cascade: true })
  @JoinTable({
    name: 'monster_damage_resistances',
    joinColumn: { name: 'monster_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'damage_type_id', referencedColumnName: 'id' },
  })
  damageResistances: DamageType[];

  // Immunités aux dégâts
  @ManyToMany(() => DamageType, (dt) => dt.immuneMonsters, { cascade: true })
  @JoinTable({
    name: 'monster_damage_immunities',
    joinColumn: { name: 'monster_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'damage_type_id', referencedColumnName: 'id' },
  })
  damageImmunities: DamageType[];

  // Immunités aux conditions
  @ManyToMany(() => ConditionType, (ct) => ct.immuneMonsters, { cascade: true })
  @JoinTable({
    name: 'monster_condition_immunities',
    joinColumn: { name: 'monster_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'condition_type_id', referencedColumnName: 'id' },
  })
  conditionImmunities: ConditionType[];
}
