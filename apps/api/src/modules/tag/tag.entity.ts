import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Content } from '../database/base.entity';
import { Game } from '../game/game.entity';

@Entity()
export class Tag extends Content {
  @Column({ comment: '태그 대표 색상' }) color: string;
  @Column({ comment: '태그 설명' }) description: string;

  @ManyToMany(() => Game, { cascade: true })
  @JoinTable()
  games: Game[];
}
