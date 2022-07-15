import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  GAME_COMMENT_REPOSITORY,
  GAME_COMMENT_SUB_REPOSITORY,
} from '../../constants/inject-keys/comment.repository';
import { Game } from '../game/entities/game.entity';
import { GameCommentSub } from './game-comment-sub.entity';
import { GameComment } from './game-comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @Inject(GAME_COMMENT_REPOSITORY)
    private readonly commentRepo: Repository<GameComment>,
    @Inject(GAME_COMMENT_SUB_REPOSITORY)
    private readonly subCommentRepo: Repository<GameCommentSub>,
  ) {}

  findOne(id: GameComment['id']): Promise<GameComment> {
    return this.commentRepo.findOne({ where: { id } });
  }

  findAll(): Promise<GameComment[]> {
    return this.commentRepo.find();
  }

  findAllByGameId(gameId: Game['id']): Promise<GameComment[]> {
    return this.commentRepo.find({ where: { game: { id: gameId } } });
  }

  // create() {};
  // update() {};
  // delete() {};

  findSubComments(commentId: GameComment['id']): Promise<GameCommentSub[]> {
    return this.subCommentRepo.find({ where: { comment: { id: commentId } } });
  }
}
