import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * Game, Question, Post, Worldcup 등 컨텐츠에 공통적으로 해당되는 정보 클래스
 */
@ObjectType()
export abstract class Content {
  @Field(() => Int) @PrimaryGeneratedColumn() readonly id!: number;
  @Field() @Column({ comment: '제목' }) title: string;

  @Field(() => Date)
  @CreateDateColumn({ comment: '생성일' })
  createDate: Date;

  @Field(() => Date)
  @UpdateDateColumn({ comment: '수정일', nullable: true })
  updateDate?: Date;

  // TODO: user 관계 추가
  // @Column({ comment: '작성자' }) createdBy: string;
}
