import { CreateSubCommentDto, UpdateSubCommentDto } from '@my/common';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GAME_COMMENT_SUB_REPOSITORY } from '../../constants/inject-keys/comment.repository';
import { GameCommentSub } from './game-comment-sub.entity';
import { GameComment } from './game-comment.entity';

@Injectable()
export class SubCommentService {
  constructor(
    @Inject(GAME_COMMENT_SUB_REPOSITORY)
    private readonly subCommentRepo: Repository<GameCommentSub>,
  ) {}

  public async findOne(id: GameCommentSub['id']): Promise<GameCommentSub> {
    return this.subCommentRepo.findOne({ where: { id } });
  }

  public async findAll(): Promise<GameCommentSub[]> {
    return this.subCommentRepo.find();
  }

  public async findAllByCommentId(
    commentId: GameComment['id'],
  ): Promise<GameCommentSub[]> {
    return this.subCommentRepo.find({ where: { comment: { id: commentId } } });
  }

  public async create(dto: CreateSubCommentDto): Promise<GameCommentSub> {
    const { commentId, ..._dto } = dto;
    const newSubCom = this.subCommentRepo.create({ comment: { id: commentId }, ..._dto });
    return this.subCommentRepo.save(newSubCom);
  }

  public async update(
    id: GameComment['id'],
    dto: Omit<UpdateSubCommentDto, 'id'>,
  ): Promise<GameCommentSub> {
    const { commentId, ..._dto } = dto;
    await this.subCommentRepo.update(id, {
      comment: { id: commentId },
      ..._dto,
    });
    return this.findOne(id);
  }

  public async delete(id: GameComment['id']): Promise<boolean> {
    const result = await this.subCommentRepo.delete(id);
    return !!result.affected;
  }
}
