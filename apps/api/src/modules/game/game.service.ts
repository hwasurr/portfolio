import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import {
  GAME_IMAGE_REPOSITORY,
  GAME_INFORMATION_REPOSITORY,
  GAME_REPOSITORY,
} from '../../constants/inject-keys/game.repository';
import { CreateGameDto, UpdateGameDto } from '../../dto/game.dto';
import { Tag } from '../tag/tag.entity';
import { TagService } from '../tag/tag.service';
import { GameImage } from './entities/game-image.entity';
import { GameInformation } from './entities/game-information.entity';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(
    @Inject(DATA_SOURCE) private readonly dataSource: DataSource,
    @Inject(GAME_REPOSITORY)
    private readonly gameRepo: Repository<Game>,
    @Inject(GAME_IMAGE_REPOSITORY)
    private readonly gameImageRepo: Repository<GameImage>,
    @Inject(GAME_INFORMATION_REPOSITORY)
    private readonly gameInfoRepo: Repository<GameInformation>,
    private readonly tagService: TagService,
  ) {}

  public async findOne(id: number): Promise<Game | null> {
    return this.gameRepo.findOne({ where: { id } });
  }

  public async findAll(): Promise<Game[]> {
    return this.gameRepo.find({});
  }

  public async create(dto: CreateGameDto): Promise<Game> {
    const { tagIds, ..._dto } = dto;
    let tags: Tag[] = [];
    if (tagIds && tagIds.length > 0) {
      tags = await this.tagService.findAll(tagIds);
    }
    const newGame = this.gameRepo.create({ ..._dto, tags });
    return this.gameRepo.save(newGame);
  }

  public async update(id: number, dto: Omit<UpdateGameDto, 'id'>): Promise<Game> {
    const { images, information, ...gameUpdateDto } = dto;
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.startTransaction();
    try {
      await this.gameRepo.update(id, gameUpdateDto);
      await this.gameInfoRepo.update({ game: { id } }, information);
      await Promise.all(
        images.map((image) => {
          return this.gameImageRepo.upsert(
            { ...image, game: { id: image.gameId } },
            { conflictPaths: ['id'] },
          );
        }),
      );
      await queryRunner.commitTransaction();
      return this.findOne(id);
    } catch {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException('Game update transaction failed');
    } finally {
      await queryRunner.release();
    }
  }

  public async delete(id: Game['id']): Promise<boolean> {
    const result = await this.gameRepo.delete(id);
    return !!result.affected;
  }

  public async findImages(gameId: number): Promise<GameImage[]> {
    return this.gameImageRepo.find({ where: { game: { id: gameId } } });
  }

  public async findInformatoin(gameId: number): Promise<GameInformation> {
    return this.gameInfoRepo.findOne({ where: { game: { id: gameId } } });
  }
}
