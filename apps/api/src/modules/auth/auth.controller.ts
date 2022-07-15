import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LoginRes, UserProfile } from '../../interfaces/auth.profile';
import { CurrentUser } from '../core/decorators/current-user.decorator';
import { JwtAuthGuard } from '../core/guards/jwt-auth.guard';
import { LocalAuthGuard } from '../core/guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@CurrentUser() user: UserProfile): Promise<LoginRes> {
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  public async profile(@CurrentUser() user: UserProfile): Promise<UserProfile> {
    return user;
  }
}
