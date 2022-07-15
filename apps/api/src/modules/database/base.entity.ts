import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Game, Question, Post, Worldcup 등 컨텐츠에 공통적으로 해당되는 정보 클래스
 */
export abstract class Content {
  @PrimaryGeneratedColumn() id: number;
  @Column({ comment: '제목' }) title: string;

  @CreateDateColumn({ comment: '생성일' })
  createDate: Date;

  @UpdateDateColumn({ comment: '수정일', nullable: true })
  updateDate?: Date;

  // TODO: user 관계 추가
  // @Column({ comment: '작성자' }) createdBy: string;
}

/** 실내/외 구분 */
export enum Site {
  INDOOR = 'INDOOR',
  OUTDOOR = 'OUTDOOR',
  BOTH = 'BOTH',
}

/** 죄식/입식 구분 */
export enum StandingStyle {
  SEDENTARY = 'SEDENTARY',
  STANDING = 'STANDING',
}

/** 사용자 권한역할 */
export enum Role {
  ADMIN = 'ADMIN',
  GUEST = 'GUEST',
  EDITOR = 'EDITOR',
}
