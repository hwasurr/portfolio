import { Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { GameCommentSub } from './game-comment-sub.entity';

@Resolver(() => GameCommentSub)
export class SubCommentResolver {
  constructor(private readonly gameService: CommentService) {}
}
