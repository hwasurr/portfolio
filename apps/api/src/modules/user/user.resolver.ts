import { CreateUserDto, PaginationDto, UpdateUserDto } from '@my/common';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlJwtGuard } from '../core/guards/gql-jwt.guard';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true, name: 'user' })
  public async findUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Query(() => [User], { nullable: true, name: 'users' })
  public async findUsers(@Args('pagination') args: PaginationDto): Promise<User[]> {
    return this.userService.findAll(args);
  }

  @Mutation(() => User, { name: 'createUser' })
  public async createUser(@Args('data') args: CreateUserDto): Promise<User> {
    return this.userService.create(args);
  }

  @UseGuards(GqlJwtGuard)
  @Mutation(() => User, { name: 'updateUser' })
  public async updateUser(@Args('data') args: UpdateUserDto): Promise<User> {
    return this.userService.update(args.id, args);
  }

  @UseGuards(GqlJwtGuard)
  @Mutation(() => Boolean, { name: 'deleteUser' })
  public async deleteUser(
    @Args('id', { type: () => Int }, ParseIntPipe) id: number,
  ): Promise<boolean> {
    return this.userService.delete(id);
  }
}
