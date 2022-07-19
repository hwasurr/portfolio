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
import { AddOrRemoveGameTagDto, CreateGameDto, UpdateGameDto } from '../../dto/game.dto';
import { CommentService } from '../comment/comment.service';
import { GameComment } from '../comment/game-comment.entity';
import { ReactionService } from '../reaction/reaction.service';
import { Tag } from '../tag/tag.entity';
import { GameImage } from './entities/game-image.entity';
import { GameInformation } from './entities/game-information.entity';
import { Game } from './entities/game.entity';
import { GameReactionResult } from './game-reactions.model';
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
    @Args('id', { type: () => Int, nullable: true }) gameId?: number,
    @Args('gamename', { nullable: true }) gamename?: string,
  ): Promise<Game | null> {
    if (gamename) return this.gameService.findOneByGamename(gamename);
    if (gameId) return this.gameService.findOne(gameId);
    return null;
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

  @ResolveField(() => [GameReactionResult], { name: 'reactions', nullable: 'items' })
  public async reactions(@Parent() game: Game): Promise<GameReactionResult[]> {
    return this.reactionService.findGroupByEmoji(game.id);
  }

  @ResolveField(() => [Tag], { name: 'tags', nullable: 'itemsAndList' })
  public async tags(@Parent() game: Game): Promise<Tag[]> {
    return this.gameService.findTags(game.id);
  }

  @ResolveField(() => Int, { name: 'commentCount' })
  public async commentCount(@Parent() game: Game): Promise<number> {
    return this.commentService.countAllByGameId(game.id);
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
