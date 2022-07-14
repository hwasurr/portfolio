/* eslint-disable @typescript-eslint/no-use-before-define */
import { Column, Entity, Index, OneToMany, OneToOne } from 'typeorm';
import { Content } from '../../database/base.entity';
import { GameComment } from './game-comment.entity';
import { GameImage } from './game-image.entity';
import { GameInformation } from './game-information.entity';
import { GameReaction } from './game-reaction.entity';

@Entity()
export class Game extends Content {
  @Column({ comment: '대표 이모지', length: 1, type: 'char' }) titleEmoji: string;
  @Index({ unique: true }) @Column({ comment: '고유이름(영어)' }) gamename: string;
  @Column({ comment: '간략 설명' }) summary: string;

  // 게임 - 일대다 - 게임이미지 관계정의
  @OneToMany(() => GameImage, (gameImage) => gameImage.game, { onDelete: 'CASCADE' })
  images: GameImage[];

  // 게임 - 일대일 - 게임정보 관계정의
  @OneToOne(() => GameInformation, (gameInfo) => gameInfo.game, { onDelete: 'CASCADE' })
  information: GameInformation;

  // 게임 - 일대다 - 코멘트 관계정의
  @OneToMany(() => GameComment, (comment) => comment.game, { onDelete: 'CASCADE' })
  comments: GameComment[];

  // 게임 - 다대다 - 유저 -> 리액션 관계정의
  @OneToMany(() => GameReaction, (reaction) => reaction.game, { onDelete: 'CASCADE' })
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
