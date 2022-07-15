import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { Content } from '../database/base.entity';
import { Game } from '../game/entities/game.entity';
import { GameCommentSub } from './game-comment-sub.entity';

@ObjectType()
@Entity()
export class GameComment extends Content {
  // 게임 - 일대다 - 코멘트 관계정의
  @ManyToOne(() => Game, (game) => game.comments, { cascade: true })
  game: Game;

  // @Field(() => [GameCommentSub], { nullable: 'items' })
  @OneToMany(() => GameCommentSub, (subCom) => subCom.comment, { onDelete: 'CASCADE' })
  subComments: GameCommentSub[];
}
