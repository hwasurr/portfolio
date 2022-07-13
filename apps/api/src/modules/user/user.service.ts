import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { USER_REPOSITORY } from '../../constants/inject-keys/user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private readonly userRepo: Repository<User>) {}

  public async findOne(id: number): Promise<User | null> {
    return this.userRepo.findOne({ where: { id } });
  }
}
