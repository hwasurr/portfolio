import { Inject, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { TAG_REPOSITORY } from '../../constants/inject-keys/tag.repository';
import { CreateTagDto, UpdateTagDto } from '../../dto/tag.dto';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
  constructor(
    @Inject(TAG_REPOSITORY)
    private readonly tagRepo: Repository<Tag>,
  ) {}

  public async findOne(id: Tag['id']): Promise<Tag> {
    return this.tagRepo.findOne({ where: { id } });
  }

  public async findAll(tagIds?: Tag['id'][]): Promise<Tag[]> {
    if (tagIds && tagIds.length > 0)
      return this.tagRepo.find({ where: { id: In(tagIds) } });
    return this.tagRepo.find();
  }

  public async create(dto: CreateTagDto): Promise<Tag> {
    return this.tagRepo.save(dto);
  }

  public async update(id: Tag['id'], dto: Omit<UpdateTagDto, 'id'>): Promise<Tag> {
    await this.tagRepo.update(id, dto);
    return this.findOne(id);
  }

  public async delete(id: Tag['id']): Promise<boolean> {
    const result = await this.tagRepo.delete(id);
    return !!result.affected;
  }
}
