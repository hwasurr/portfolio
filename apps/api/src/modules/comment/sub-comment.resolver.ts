import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateSubCommentDto, UpdateSubCommentDto } from '../../dto/comment.dto';
import { GameCommentSub } from './game-comment-sub.entity';
import { SubCommentService } from './sub-comment.service';

@Resolver(() => GameCommentSub)
export class SubCommentResolver {
  constructor(private readonly subCommentService: SubCommentService) {}

  @Query(() => [GameCommentSub], { name: 'subComments', nullable: 'itemsAndList' })
  public async findSubComments(
    @Args('commentId', { type: () => Int }, ParseIntPipe) commentId: number,
  ): Promise<GameCommentSub[]> {
    return this.subCommentService.findAllByCommentId(commentId);
  }

  @Mutation(() => GameCommentSub, { name: 'createSubComment' })
  public async createComment(
    @Args('data', ValidationPipe) dto: CreateSubCommentDto,
  ): Promise<GameCommentSub> {
    return this.subCommentService.create(dto);
  }

  @Mutation(() => GameCommentSub, { name: 'updateSubComment' })
  public async updateComment(
    @Args('data', ValidationPipe) dto: UpdateSubCommentDto,
  ): Promise<GameCommentSub> {
    const { id, ..._dto } = dto;
    return this.subCommentService.update(id, _dto);
  }

  @Mutation(() => Boolean, { name: 'deleteSubComment' })
  public async deleteComment(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<boolean> {
    return this.subCommentService.delete(id);
  }
}
