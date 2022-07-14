import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GameReaction } from '../game/entities/game-reaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn() readonly id!: number;
  @Index({ unique: true }) @Column() loginId: string;
  @Column() password: string;
  @Column({ nullable: true }) nickname?: string;
  @Column({ nullable: true }) avatar?: string;

  @CreateDateColumn() readonly createDate!: Date;
  @UpdateDateColumn() readonly updateDate!: Date;

  // 관계
  @OneToMany(() => GameReaction, (reaction) => reaction.user, { onDelete: 'CASCADE' })
  reactions: GameReaction[];
}
