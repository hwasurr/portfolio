/* eslint-disable @typescript-eslint/no-use-before-define */
import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';
import { GameComment } from '../../comment/game-comment.entity';
import { Content } from '../../database/base.entity';
import { GameReaction } from '../../reaction/game-reaction.entity';
import { GameImage } from './game-image.entity';
import { GameInformation } from './game-information.entity';

@ObjectType()
@Entity()
export class Game extends Content {
  @Field()
  @Column({ comment: '대표 이모지', length: 1, type: 'char' })
  titleEmoji: string;

  @Field()
  @Index({ unique: true })
  @Column({ comment: '고유이름(영어)' })
  gamename: string;

  @Field() @Column({ comment: '간략 설명' }) summary: string;

  // 게임 - 일대다 - 게임이미지 관계정의
  @Field(() => [GameImage], { nullable: 'items' })
  @OneToMany(() => GameImage, (gameImage) => gameImage.game, {
    onDelete: 'CASCADE',
    nullable: true,
    cascade: true,
  })
  images: GameImage[];

  // 게임 - 일대일 - 게임정보 관계정의
  @Field(() => GameInformation)
  @OneToOne(() => GameInformation, (gameInfo) => gameInfo.game, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  information: GameInformation;

  // 게임 - 일대다 - 코멘트 관계정의
  @Field(() => [GameComment], { nullable: 'items' })
  @OneToMany(() => GameComment, (comment) => comment.game, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  comments: GameComment[];

  // 게임 - 다대다 - 유저 -> 리액션 관계정의
  @Field(() => [GameReaction], { nullable: 'items' })
  @OneToMany(() => GameReaction, (reaction) => reaction.game, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  reactions: GameReaction[];
}

// TODO 제보 (유저 등록 게임)
// @Entity()
// export class UserTippedGame {
//   @PrimaryGeneratedColumn() id: number;
//   //
// }

// TODO  질문게임-질문목록
// @Entity()
// export class Question {
//   @PrimaryGeneratedColumn() id: number;
//   //
// }
