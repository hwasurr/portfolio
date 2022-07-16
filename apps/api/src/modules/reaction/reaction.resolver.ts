import { AddGameReactionDto } from '@my/common';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { GameReaction } from './game-reaction.entity';
import { ReactionService } from './reaction.service';

@Resolver(() => GameReaction)
export class ReactionResolver {
  constructor(private readonly reactionService: ReactionService) {}

  @Query(() => [GameReaction], { name: 'reactions' })
  public async reactions(
    @Args('gameId', { type: () => Int }, ParseIntPipe) gameId: number,
  ): Promise<GameReaction[]> {
    return this.reactionService.findAllByGameId(gameId);
  }

  @Mutation(() => GameReaction, { name: 'addGameReaction' })
  public async createGameReaction(
    @Args(ValidationPipe) dto: AddGameReactionDto,
  ): Promise<GameReaction> {
    return this.reactionService.addGameReaction(dto.gameId, dto.tagId);
  }

  @Mutation(() => GameReaction, { name: 'removeGameReaction' })
  public async removeGameReaction(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<boolean> {
    return this.reactionService.removeGameReaction(id);
  }
}
