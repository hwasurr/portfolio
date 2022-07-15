import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './game.entity';

@ObjectType()
@Entity()
export class GameImage {
  @Field(() => Int) @PrimaryGeneratedColumn() readonly id!: number;
  @Field() @Column() name: string;
  @Field() @Column() src: string;

  @ManyToOne(() => Game, (game) => game.images, {
    onDelete: 'CASCADE',
    nullable: false,
    orphanedRowAction: 'delete',
  })
  game: Game;
}
