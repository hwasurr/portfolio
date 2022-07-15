import { Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { GameComment } from './game-comment.entity';

@Resolver(() => GameComment)
export class CommentResolver {
  constructor(private readonly gameService: CommentService) {}
}
