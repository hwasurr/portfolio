/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Content, Site, StandingStyle } from '../database/base.entity';
import { User } from '../user/user.entity';

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

@Entity()
export class GameImage {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() src: string;

  @ManyToOne(() => Game, (game) => game.images, { cascade: true }) game: Game;
}

@Entity()
export class GameInformation {
  @PrimaryGeneratedColumn() id: number;
  @Column({ type: 'longtext' }) howToPlay: string;
  @Column({ nullable: true, type: 'text' }) benefit?: string;

  @Index()
  @Column({
    comment: '실내/실외/둘다가능',
    type: 'enum',
    enum: Site,
    default: Site.INDOOR,
  })
  availableSite?: Site;

  @Index()
  @Column({
    comment: '좌식/입식',
    type: 'enum',
    enum: StandingStyle,
    default: StandingStyle.SEDENTARY,
  })
  standingStyle?: Site;

  @Column({ comment: '최소 인원' }) minNumberOfPeople: number;
  @Column({ comment: '최대 인원(9999=이상)' }) maxNumberOfPeople: number;

  @Column({ comment: '최소 소요 시간' }) minMinuteTaken: number;
  @Column({ comment: '최대 소요 시간' }) maxMinuteTaken: number;

  @OneToOne(() => Game, (game) => game.information, { cascade: true })
  @JoinColumn()
  game: Game;
}

@Entity()
export class GameComment extends Content {
  // 게임 - 일대다 - 코멘트 관계정의
  @ManyToOne(() => Game, (game) => game.comments, { cascade: true })
  game: Game;

  @OneToMany(() => GameCommentSub, (subCom) => subCom.comment, { onDelete: 'CASCADE' })
  subComments: GameCommentSub[];
}

@Entity()
export class GameCommentSub extends Content {
  // 코멘트 - 일대다 - 서브코멘트 관계정의
  @ManyToOne(() => GameComment, (comment) => comment.subComments, { cascade: true })
  comment: GameComment;
}

@Entity()
export class GameReaction {
  @PrimaryGeneratedColumn() id: number;
  @Column({ comment: '리액션 이모지', length: 1, type: 'char' }) reactionEmoji: string;

  // 게임 - 다대다 - 유저 -> 리액션 관계정의
  @ManyToOne(() => User, (user) => user.reactions, { cascade: true })
  user: User;

  @ManyToOne(() => Game, (game) => game.reactions, { cascade: true })
  game: Game;
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
