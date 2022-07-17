import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GAME_COMMENT_REPOSITORY } from '../../constants/inject-keys/comment.repository';
import { CreateCommentDto, UpdateCommentDto } from '../../dto/comment.dto';
import { Game } from '../game/entities/game.entity';
import { GameComment } from './game-comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @Inject(GAME_COMMENT_REPOSITORY)
    private readonly commentRepo: Repository<GameComment>,
  ) {}

  public async findOne(id: GameComment['id']): Promise<GameComment> {
    return this.commentRepo.findOne({ where: { id } });
  }

  public async findAll(): Promise<GameComment[]> {
    return this.commentRepo.find();
  }

  public async findAllByGameId(gameId: Game['id']): Promise<GameComment[]> {
    return this.commentRepo.find({ where: { game: { id: gameId } } });
  }

  public async create(dto: CreateCommentDto): Promise<GameComment> {
    const { gameId, ..._dto } = dto;
    const newCommnet = this.commentRepo.create({
      game: { id: gameId },
      ..._dto,
    });
    return this.commentRepo.save(newCommnet);
  }

  public async update(
    id: GameComment['id'],
    dto: Omit<UpdateCommentDto, 'id'>,
  ): Promise<GameComment> {
    await this.commentRepo.update(id, dto);
    return this.findOne(id);
  }

  public async delete(id: GameComment['id']): Promise<boolean> {
    const result = await this.commentRepo.delete(id);
    return !!result.affected;
  }
}
