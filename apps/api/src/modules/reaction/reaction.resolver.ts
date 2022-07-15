import { Resolver } from '@nestjs/graphql';
import { GameReaction } from './game-reaction.entity';
import { ReactionService } from './reaction.service';

@Resolver(() => GameReaction)
export class ReactionResolver {
  constructor(private readonly reactionService: ReactionService) {}
}
