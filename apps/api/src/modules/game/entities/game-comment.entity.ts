import { Entity, ManyToOne, OneToMany } from 'typeorm';
import { Content } from '../../database/base.entity';
import { GameCommentSub } from './game-comment-sub.entity';
import { Game } from './game.entity';

@Entity()
export class GameComment extends Content {
  // 게임 - 일대다 - 코멘트 관계정의
  @ManyToOne(() => Game, (game) => game.comments, { cascade: true })
  game: Game;

  @OneToMany(() => GameCommentSub, (subCom) => subCom.comment, { onDelete: 'CASCADE' })
  subComments: GameCommentSub[];
}
