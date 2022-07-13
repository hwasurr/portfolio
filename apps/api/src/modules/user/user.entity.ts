import { Entity, PrimaryGeneratedColumn, Index, Column, OneToMany } from 'typeorm';
import { GameReaction } from '../game/game.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;
  @Index({ unique: true }) @Column() loginId: string;
  @Column() password: string;
  @Column({ nullable: true }) nickname?: string;
  @Column({ nullable: true }) avatar?: string;

  // 관계
  @OneToMany(() => GameReaction, (reaction) => reaction.user, { onDelete: 'CASCADE' })
  reactions: GameReaction[];
}
