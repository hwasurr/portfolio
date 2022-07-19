import { ParseIntPipe, UseGuards, ValidationPipe } from '@nestjs/common';
import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { AddGameReactionDto } from '../../dto/game.dto';
import { UserProfile } from '../../interfaces/auth.profile';
import { CurrentUser } from '../core/decorators/current-user.decorator';
import { GqlJwtGuard } from '../core/guards/gql-jwt.guard';
import { GameReaction } from './game-reaction.entity';
import { ReactionService } from './reaction.service';

@Resolver(() => GameReaction)
export class ReactionResolver {
  constructor(private readonly reactionService: ReactionService) {}

  @Query(() => [GameReaction], { name: 'reactions', nullable: 'items' })
  public async reactions(
    @Args('gameId', { type: () => Int }, ParseIntPipe) gameId: number,
  ): Promise<GameReaction[]> {
    return this.reactionService.findAllByGameId(gameId);
  }

  @UseGuards(GqlJwtGuard)
  @Mutation(() => GameReaction, { name: 'addGameReaction', nullable: true })
  public async createGameReaction(
    @Args(ValidationPipe) dto: AddGameReactionDto,
    @CurrentUser() user: UserProfile,
  ): Promise<GameReaction> {
    console.log(user);
    return this.reactionService.addGameReaction(
      dto.gameId,
      user.userId,
      dto.reactionEmoji,
    );
  }

  @Mutation(() => Boolean, { name: 'removeGameReaction' })
  public async removeGameReaction(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<boolean> {
    return this.reactionService.removeGameReaction(id);
  }
}
