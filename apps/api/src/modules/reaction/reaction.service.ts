import { BadRequestException, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { GAME_REACTION_REPOSITORY } from '../../constants/inject-keys/game.repository';
import { Game } from '../game/entities/game.entity';
import { GameReactionResult } from '../game/game-reactions.model';
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

  public async findGroupByEmoji(
    gameId: Game['id'],
    userId?: User['id'],
  ): Promise<GameReactionResult[]> {
    const queryResult = await this.reactionRepo
      .createQueryBuilder()
      .select('reactionEmoji, COUNT(*) AS count, GROUP_CONCAT(userId) as userIds')
      .groupBy('reactionEmoji')
      .where('gameId = :gameId', { gameId })
      .getRawMany();
    const result = queryResult.map((res) => ({
      count: res.count,
      reactionEmoji: res.reactionEmoji,
      reactedByMe: !userId ? false : res.userIds.split(',').some((id) => id === userId),
    }));
    return result;
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
    emoji: GameReaction['reactionEmoji'],
  ): Promise<GameReaction | null> {
    const targetUser = await this.findUser(userId);
    const targetGame = await this.findGame(gameId);
    const already = await this.reactionRepo.findOne({
      where: {
        game: { id: targetGame.id },
        user: { id: targetUser.id },
        reactionEmoji: emoji,
      },
    });
    if (already) return null;
    const newReaction = this.reactionRepo.create({
      game: targetGame,
      user: targetUser,
      reactionEmoji: emoji,
    });
    return this.reactionRepo.save(newReaction);
  }

  public async removeGameReaction(id: GameReaction['id']): Promise<boolean> {
    const result = await this.reactionRepo.delete(id);
    return !!result.affected;
  }
}
