import { CreateUserDto, PaginationDto, UpdateUserDto } from '@my/common';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import argon2 from 'argon2';
import { USER_REPOSITORY } from '../../constants/inject-keys/user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private readonly userRepo: Repository<User>) {}

  public async findOne(whereField: string): Promise<User | null>;
  public async findOne(whereField: number): Promise<User | null>;
  public async findOne(whereField: string | number): Promise<User | null> {
    if (typeof whereField === 'string') {
      return this.userRepo.findOne({ where: { loginId: whereField } });
    }
    if (typeof whereField === 'number') {
      return this.userRepo.findOne({ where: { id: whereField } });
    }
    return null;
  }

  public async findAll(pagiationDto: PaginationDto): Promise<User[]> {
    return this.userRepo.find({
      cache: true,
      skip: pagiationDto.skip,
      take: pagiationDto.take,
    });
  }

  public async create(dto: CreateUserDto): Promise<User> {
    const hashedPw = await argon2.hash(dto.password);
    return this.userRepo.save({
      ...dto,
      password: hashedPw,
    });
  }

  public async update(id: User['id'], dto: Omit<UpdateUserDto, 'id'>): Promise<User> {
    await this.userRepo.update(id, dto);
    return this.findOne(id);
  }

  public async delete(id: User['id']): Promise<boolean> {
    const result = await this.userRepo.delete(id);
    return !!result.affected;
  }
}
