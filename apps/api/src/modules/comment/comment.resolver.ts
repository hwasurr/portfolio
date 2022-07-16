import { CreateCommentDto, UpdateCommentDto } from '@my/common';
import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Args, Int, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { GameCommentSub } from './game-comment-sub.entity';
import { GameComment } from './game-comment.entity';
import { SubCommentService } from './sub-comment.service';

@Resolver(() => GameComment)
export class CommentResolver {
  constructor(
    private readonly commentService: CommentService,
    private readonly subCommentService: SubCommentService,
  ) {}

  @Query(() => [GameComment], { name: 'comments', nullable: 'items' })
  public async findAll(
    @Args('gameId', { type: () => Int }, ParseIntPipe) gameId: number,
  ): Promise<GameComment[]> {
    return this.commentService.findAllByGameId(gameId);
  }

  @Query(() => GameComment, { name: 'comment', nullable: true })
  public async findOne(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<GameComment> {
    return this.commentService.findOne(id);
  }

  @ResolveField(() => [GameCommentSub], { name: 'subComments', nullable: 'itemsAndList' })
  public async findSubComments(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<GameCommentSub[]> {
    return this.subCommentService.findAllByCommentId(id);
  }

  @Mutation(() => GameComment, { name: 'createComment' })
  public async createComment(
    @Args('data', ValidationPipe) dto: CreateCommentDto,
  ): Promise<GameComment> {
    return this.commentService.create(dto);
  }

  @Mutation(() => GameComment, { name: 'updateComment' })
  public async updateComment(
    @Args('data', ValidationPipe) dto: UpdateCommentDto,
  ): Promise<GameComment> {
    const { id, ..._dto } = dto;
    return this.commentService.update(id, _dto);
  }

  @Mutation(() => Boolean, { name: 'deleteComment' })
  public async deleteComment(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<boolean> {
    return this.commentService.delete(id);
  }
}
