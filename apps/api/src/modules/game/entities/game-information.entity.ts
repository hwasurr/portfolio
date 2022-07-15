import { Site, StandingStyle } from '@my/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Game } from './game.entity';

@Entity()
@ObjectType()
export class GameInformation {
  @Field(() => Int) @PrimaryGeneratedColumn() readonly id!: number;
  @Field() @Column({ type: 'longtext' }) howToPlay: string;
  @Field() @Column({ nullable: true, type: 'text' }) benefit?: string;

  @Field(() => Site, { defaultValue: Site.INDOOR })
  @Index()
  @Column({
    comment: '실내/실외/둘다가능',
    type: 'enum',
    enum: Site,
    default: Site.INDOOR,
  })
  availableSite?: Site;

  @Field(() => StandingStyle, { defaultValue: StandingStyle.SEDENTARY })
  @Index()
  @Column({
    comment: '좌식/입식',
    type: 'enum',
    enum: StandingStyle,
    default: StandingStyle.SEDENTARY,
  })
  standingStyle?: StandingStyle;

  @Field(() => Int)
  @Column({ comment: '최소 인원' })
  minNumberOfPeople: number;

  @Field(() => Int)
  @Column({ comment: '최대 인원(9999=이상)' })
  maxNumberOfPeople: number;

  @Field(() => Int)
  @Column({ comment: '최소 소요 시간' })
  minMinuteTaken: number;

  @Field(() => Int)
  @Column({ comment: '최대 소요 시간' })
  maxMinuteTaken: number;

  @OneToOne(() => Game, (game) => game.information, { onDelete: 'CASCADE' })
  @JoinColumn()
  game: Game;
}
