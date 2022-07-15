import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GAME_REACTION_REPOSITORY } from '../../constants/inject-keys/game.repository';
import { Game } from '../game/entities/game.entity';
import { GameReaction } from './game-reaction.entity';

export class ReactionService {
  constructor(
    @Inject(GAME_REACTION_REPOSITORY)
    private readonly reactionRepo: Repository<GameReaction>,
  ) {}

  findOne(id: GameReaction['id']): Promise<GameReaction> {
    return this.reactionRepo.findOne({ where: { id } });
  }

  findAll(): Promise<GameReaction[]> {
    return this.reactionRepo.find();
  }

  findAllByGameId(gameId: Game['id']): Promise<GameReaction[]> {
    return this.reactionRepo.find({ where: { game: { id: gameId } } });
  }
}
