import { Entity, ManyToOne } from 'typeorm';
import { Content } from '../../database/base.entity';
import { GameComment } from './game-comment.entity';

@Entity()
export class GameCommentSub extends Content {
  // 코멘트 - 일대다 - 서브코멘트 관계정의
  @ManyToOne(() => GameComment, (comment) => comment.subComments, { cascade: true })
  comment: GameComment;
}
