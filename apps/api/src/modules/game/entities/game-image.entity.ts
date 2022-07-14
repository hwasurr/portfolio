import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Game } from './game.entity';

@Entity()
export class GameImage {
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() src: string;

  @ManyToOne(() => Game, (game) => game.images, { cascade: true }) game: Game;
}
