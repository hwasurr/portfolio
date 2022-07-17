import { Role } from '@my/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GameReaction } from '../reaction/game-reaction.entity';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  readonly id!: number;

  @Field()
  @Index({ unique: true })
  @Column()
  loginId: string;

  @Column() password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  nickname?: string;

  @Field({ nullable: true })
  @Column({ nullable: true, comment: '아바타 이모지' })
  avatar?: string;

  @Field({ nullable: true, defaultValue: 'enum' })
  @Column({ type: 'enum', enum: Role, default: Role.GUEST })
  role?: Role;

  @Field({ nullable: true })
  @Column({ nullable: true })
  email?: string;

  @Field()
  @CreateDateColumn()
  readonly createDate!: Date;

  @Field()
  @UpdateDateColumn()
  readonly updateDate!: Date;

  // 관계
  @Field(() => [GameReaction], { nullable: 'items' })
  @OneToMany(() => GameReaction, (reaction) => reaction.user, {
    onDelete: 'CASCADE',
    nullable: true,
  })
  reactions?: GameReaction[];
}
