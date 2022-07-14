import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import argon2 from 'argon2';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  public async validateUser(loginId: string, inputPassword: string) {
    const user = await this.userService.findOne(loginId);
    if (!user) throw new UnauthorizedException('User not found');
    // 비밀번호 해시 비교
    const isMatched = await argon2.verify(user.password, inputPassword);
    if (!isMatched) throw new UnauthorizedException('Password incorrent');
    return user;
  }

  public async login(user: any) {
    const payload = { loginId: user.loginId, sub: user.loginId };
    return {
      accees_tokken: this.jwtService.sign(payload),
    };
  }
}
