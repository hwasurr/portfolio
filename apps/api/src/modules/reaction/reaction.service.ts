import { BadRequestException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GAME_REACTION_REPOSITORY } from '../../constants/inject-keys/game.repository';
import { Game } from '../game/entities/game.entity';
import { GameService } from '../game/game.service';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { GameReaction } from './game-reaction.entity';

export class ReactionService {
  constructor(
    @Inject(GAME_REACTION_REPOSITORY)
    private readonly reactionRepo: Repository<GameReaction>,
    private readonly gameService: GameService,
    private readonly userService: UserService,
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

  private async findGame(id: Game['id']): Promise<Game> {
    const targetGame = await this.gameService.findOne(id);
    if (!targetGame) throw new BadRequestException(`Game:${id} is not exists`);
    return targetGame;
  }

  private async findUser(id: User['id']): Promise<User> {
    const targetTag = await this.userService.findOne(id);
    if (!targetTag) throw new BadRequestException(`User:${id} is not exists`);
    return targetTag;
  }

  public async addGameReaction(
    gameId: Game['id'],
    userId: User['id'],
  ): Promise<GameReaction> {
    const targetUser = await this.findUser(userId);
    const targetGame = await this.findGame(gameId);
    const newReaction = this.reactionRepo.create({ game: targetGame, user: targetUser });
    return this.reactionRepo.save(newReaction);
  }

  public async removeGameReaction(id: GameReaction['id']): Promise<boolean> {
    const result = await this.reactionRepo.delete(id);
    return !!result.affected;
  }
}
