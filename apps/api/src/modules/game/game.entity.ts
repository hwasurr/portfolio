import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Content, Site, StandingStyle } from '../database/base.entity';

@Entity()
export class Game extends Content {
  @Column({ comment: '대표 이모지', length: 1, type: 'char' }) titleEmoji: string;
  @Index({ unique: true }) @Column({ comment: '고유이름(영어)' }) gamename: string;
  @Column({ comment: '간략 설명' }) summary: string;

  // TODO: 게임 - 일대다 - 게임이미지 관계정의
  // TODO: 게임 - 일대일 - 게임정보 관계정의
  // TODO: 게임 - 다대다 - 태그 관계정의
  // TODO: 게임 - 다대다 - 유저 -> 리액션 관계정의
}

@Entity()
export class GameImage {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() src: string;
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
}

@Entity()
export class Tag extends Content {
  @Column({ comment: '태그 대표 색상' }) color: string;
  @Column({ comment: '태그 설명' }) description: string;
}

@Entity()
export class GameComment extends Content {
  // TODO: 게임 - 일대다 - 코멘트 관계정의
}

@Entity()
export class GameSubComment extends Content {
  // TODO: 코멘트 - 일대다 - 서브코멘트 관계정의
}

export class GameReaction {
  // TODO: 게임 - 다대다 - 유저 -> 리액션 관계정의
  reactionEmoji: string;
}

// TODO 제보 (유저 등록 게임)
export class UserTippedGame {
  //
}

// TODO  질문게임-질문목록
export class Questions {
  //
}
