import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Monster } from "./monster.entity";

@Entity()
export class MonsterReaction {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Monster, (m) => m.reactions, { onDelete: 'CASCADE' })
    monster: Monster;

    @Column()
    name: string;

    @Column({ type: 'text' })
    description: string;
}
