import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from '../game/entities/game.entity';
import { User } from '../user/user.entity';

@ObjectType()
@Entity()
export class GameReaction {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ comment: '리액션 이모지' })
  reactionEmoji: string;

  // 게임 - 다대다 - 유저 -> 리액션 관계정의
  @ManyToOne(() => User, (user) => user.reactions, { cascade: true })
  @Index()
  user: User;

  @ManyToOne(() => Game, (game) => game.reactions, { cascade: true })
  @Index()
  game: Game;
}
