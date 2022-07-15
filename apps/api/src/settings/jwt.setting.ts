import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';

@Injectable()
export class JwtSetting implements JwtOptionsFactory {
  constructor(private readonly configService: ConfigService) {}
  async createJwtOptions(): Promise<JwtModuleOptions> {
    const secret = this.configService.get('JWT_SECRET');
    return {
      secret,
      signOptions: {
        expiresIn: this.configService.get('NODE_ENV') === 'production' ? '5m' : '12h',
      },
    };
  }
}
