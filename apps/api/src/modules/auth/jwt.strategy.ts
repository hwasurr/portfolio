import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly configService: ConfigService) {
    const opts: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    };
    super(opts);
  }

  async validate(payload: any) {
    return { userId: payload.sub, loginId: payload.loginId };
  }
}
