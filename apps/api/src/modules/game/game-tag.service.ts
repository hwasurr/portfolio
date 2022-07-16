import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import { Tag } from '../tag/tag.entity';
import { TagService } from '../tag/tag.service';
import { Game } from './entities/game.entity';
import { GameService } from './game.service';

@Injectable()
export class GameTagService {
  constructor(
    @Inject(DATA_SOURCE) private readonly dataSource: DataSource,
    private readonly gameService: GameService,
    private readonly tagService: TagService,
  ) {}

  private async findGame(id: Game['id']): Promise<Game> {
    const targetGame = await this.gameService.findOne(id);
    if (!targetGame) throw new BadRequestException(`Game:${id} is not exists`);
    return targetGame;
  }

  private async findTag(id: Tag['id']): Promise<Tag> {
    const targetTag = await this.tagService.findOne(id);
    if (!targetTag) throw new BadRequestException(`Tag:${id} is not exists`);
    return targetTag;
  }

  public async addGameTag(id: Game['id'], tagId: Tag['id']): Promise<Game> {
    const targetGame = await this.findGame(id);
    const targetTag = await this.findTag(tagId);
    targetGame.tags = [...targetGame.tags, targetTag];
    return this.dataSource.manager.save(targetGame);
  }

  public async removeGameTag(id: Game['id'], tagId: Tag['id']): Promise<Game> {
    const targetGame = await this.findGame(id);
    const filteredTags = targetGame.tags.filter((tag) => tag.id !== tagId);
    targetGame.tags = filteredTags;
    return this.dataSource.manager.save(targetGame);
  }
}
