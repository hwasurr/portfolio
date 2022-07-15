import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import argon2 from 'argon2';
import { LoginRes, UserProfile } from '../../interfaces/auth.profile';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  private userToProfile(user: Pick<User, 'loginId'>): UserProfile {
    return { sub: user.loginId, loginId: user.loginId };
  }

  public async validateUser(
    loginId: string,
    inputPassword: string,
  ): Promise<UserProfile> {
    const user = await this.userService.findOne(loginId);
    if (!user) throw new UnauthorizedException('User not found');
    // 비밀번호 해시 비교
    const isMatched = await argon2.verify(user.password, inputPassword);
    if (!isMatched) throw new UnauthorizedException('Password incorrent');
    return this.userToProfile(user);
  }

  public async login(user: UserProfile): Promise<LoginRes> {
    const profile = this.userToProfile(user);
    return {
      accessToken: this.jwtService.sign(profile),
    };
  }
}
