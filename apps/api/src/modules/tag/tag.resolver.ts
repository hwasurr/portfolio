import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTagDto, UpdateTagDto } from '../../dto/tag.dto';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';

@Resolver(() => Tag)
export class TagResolver {
  constructor(private readonly tagService: TagService) {}

  @Query(() => Tag, { name: 'tag' })
  public async tag(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<Tag> {
    return this.tagService.findOne(id);
  }

  @Query(() => [Tag], { name: 'tags' })
  public async tags(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Mutation(() => Tag, { name: 'createTag' })
  public async create(@Args('data', ValidationPipe) dto: CreateTagDto): Promise<Tag> {
    return this.tagService.create(dto);
  }

  @Mutation(() => Tag, { name: 'updateTag' })
  public async update(@Args('data', ValidationPipe) dto: UpdateTagDto): Promise<Tag> {
    const { id, ..._dto } = dto;
    return this.tagService.update(id, _dto);
  }

  @Mutation(() => Boolean, { name: 'deleteTag' })
  public async delete(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<boolean> {
    return this.tagService.delete(id);
  }
}
