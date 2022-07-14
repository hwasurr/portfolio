import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({ usernameField: 'loginId' });
  }

  async validate(loginId?: string, password?: string): Promise<any> {
    if (!loginId || !password)
      throw new UnauthorizedException({
        type: 'information_required',
        message: 'loginId and password is cannot be empty',
      });
    const user = await this.authService.validateUser(loginId, password);
    if (!user) throw new UnauthorizedException('User not found');
    return user;
  }
}
