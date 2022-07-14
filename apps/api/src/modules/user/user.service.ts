import { CreateUserDto, UpdateUserDto } from '@my/common/dist/src';
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

  public async create(dto: CreateUserDto): Promise<User> {
    return this.userRepo.save(dto);
  }

  public async update(id: User['id'], dto: UpdateUserDto): Promise<User> {
    await this.userRepo.update(id, dto);
    return this.findOne(id);
  }

  public async delete(id: User['id']): Promise<boolean> {
    const result = await this.userRepo.delete(id);
    return !!result.affected;
  }
}
