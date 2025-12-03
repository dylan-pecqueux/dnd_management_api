import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Adventurer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  class: string;

  @Column({ nullable: true })
  level: number;

  @Column({ nullable: true })
  race: string;

  @Column({ nullable: true })
  imageUrl: string;
}
