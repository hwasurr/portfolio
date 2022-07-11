import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CAT_REPOSITORY } from '../../constants/inject-keys/cat.repository';
import { Cat } from './cat.entity';

@Injectable()
export class CatService {
  constructor(@Inject(CAT_REPOSITORY) private readonly catRepo: Repository<Cat>) {}

  public async findAll(): Promise<Cat[]> {
    return this.catRepo.find();
  }
}
