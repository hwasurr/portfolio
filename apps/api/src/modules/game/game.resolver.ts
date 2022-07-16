import { AddOrRemoveGameTagDto, CreateGameDto, UpdateGameDto } from '@my/common';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CommentService } from '../comment/comment.service';
import { GameComment } from '../comment/game-comment.entity';
import { GameReaction } from '../reaction/game-reaction.entity';
import { ReactionService } from '../reaction/reaction.service';
import { Tag } from '../tag/tag.entity';
import { GameImage } from './entities/game-image.entity';
import { GameInformation } from './entities/game-information.entity';
import { Game } from './entities/game.entity';
import { GameTagService } from './game-tag.service';
import { GameService } from './game.service';

@Resolver(() => Game)
export class GameResolver {
  constructor(
    private readonly gameService: GameService,
    private readonly commentService: CommentService,
    private readonly reactionService: ReactionService,
    private readonly gametagService: GameTagService,
  ) {}

  @Query(() => Game, { name: 'game', nullable: true })
  public async findGame(
    @Args('id', { type: () => Int }, ParseIntPipe) gameId: number,
  ): Promise<Game | null> {
    return this.gameService.findOne(gameId);
  }

  @Query(() => [Game], { name: 'games' })
  public async games(): Promise<Game[]> {
    return this.gameService.findAll();
  }

  @ResolveField(() => [GameImage], { name: 'images', nullable: 'items' })
  public async gameImages(@Parent() game: Game): Promise<GameImage[]> {
    return this.gameService.findImages(game.id);
  }

  @ResolveField(() => GameInformation, { name: 'information' })
  public async information(@Parent() game: Game): Promise<GameInformation> {
    return this.gameService.findInformatoin(game.id);
  }

  @ResolveField(() => [GameComment], { name: 'comments' })
  public async comments(@Parent() game: Game): Promise<GameComment[]> {
    return this.commentService.findAllByGameId(game.id);
  }

  @ResolveField(() => [GameReaction], { name: 'reactions' })
  public async reactions(@Parent() game: Game): Promise<GameReaction[]> {
    return this.reactionService.findAllByGameId(game.id);
  }

  @Mutation(() => Game, { name: 'createGame' })
  public async createGame(
    @Args('data', ValidationPipe) dto: CreateGameDto,
  ): Promise<Game> {
    return this.gameService.create(dto);
  }

  @Mutation(() => Game, { name: 'updateGame' })
  public async updateGame(
    @Args('data', ValidationPipe) dto: UpdateGameDto,
  ): Promise<Game> {
    const { id, ..._dto } = dto;
    return this.gameService.update(id, _dto);
  }

  @Mutation(() => Boolean, { name: 'deleteGame' })
  public async deleteGame(
    @Args('id', { type: () => Int }, ParseIntPipe) gameId: number,
  ): Promise<boolean> {
    return this.gameService.delete(gameId);
  }

  @Mutation(() => Game, { name: 'addGameTag' })
  public async addGameTag(
    @Args(ValidationPipe) dto: AddOrRemoveGameTagDto,
  ): Promise<Game> {
    const { gameId, tagId } = dto;
    return this.gametagService.addGameTag(gameId, tagId);
  }

  @Mutation(() => Game, { name: 'removeGameTag' })
  public async removeGameTag(
    @Args(ValidationPipe) dto: AddOrRemoveGameTagDto,
  ): Promise<Game> {
    const { gameId, tagId } = dto;
    return this.gametagService.removeGameTag(gameId, tagId);
  }
}
