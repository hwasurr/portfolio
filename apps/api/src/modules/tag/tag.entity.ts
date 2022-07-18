import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Content } from '../database/base.entity';
import { Game } from '../game/entities/game.entity';

@ObjectType()
@Entity()
export class Tag extends Content {
  @Field() @Column({ comment: '태그 대표 색상' }) color: string;
  @Field() @Column({ comment: '태그 설명' }) description: string;

  @ManyToMany(() => Game, { cascade: true })
  games: Game[];
}
