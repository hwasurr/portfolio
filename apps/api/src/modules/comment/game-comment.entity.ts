import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Content } from '../database/base.entity';
import { Game } from '../game/entities/game.entity';
import { GameCommentSub } from './game-comment-sub.entity';

@ObjectType()
@Entity()
export class GameComment extends Content {
  @Field() @Column({ type: 'longtext' }) contents: string;
  // 게임 - 일대다 - 코멘트 관계정의
  @ManyToOne(() => Game, (game) => game.comments, { cascade: true, onDelete: 'CASCADE' })
  game: Game;

  @Field(() => [GameCommentSub], { nullable: 'items' })
  @OneToMany(() => GameCommentSub, (subCom) => subCom.comment)
  subComments: GameCommentSub[];
}
