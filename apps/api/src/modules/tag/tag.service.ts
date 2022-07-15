import { CreateTagDto, UpdateTagDto } from '@my/common';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TAG_REPOSITORY } from '../../constants/inject-keys/tag.repository';
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

  public async findAll(): Promise<Tag[]> {
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
    return !!result;
  }
}
