import { LoninArgs } from '@my/common';
import { UseGuards, ValidationPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserProfile } from '../../interfaces/auth.profile';
import { CurrentUser } from '../core/decorators/current-user.decorator';
import { GqlJwtGuard } from '../core/guards/gql-jwt.guard';
import { Login, Me } from './auth.model';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Login, { name: 'login' })
  public async login(@Args(ValidationPipe) loginArgs: LoninArgs): Promise<Login> {
    const { loginId, password } = loginArgs;
    const validated = await this.authService.validateUser(loginId, password);
    const loginResult = await this.authService.login(validated);
    return loginResult;
  }

  @UseGuards(GqlJwtGuard)
  @Query(() => Me, { name: 'profile' })
  public async profile(@CurrentUser() user: UserProfile): Promise<UserProfile> {
    return user;
  }
}
