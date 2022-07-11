import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';

export class AppSetting {
  constructor(
    private readonly app: NestExpressApplication,
    private readonly configService: ConfigService,
  ) {}

  public initialize() {
    // Some API settings are located here.

    this.app.use(helmet());
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(
      cookieParser(this.configService.get('COOKIE_SECRET') || 'COOKIE_SECRET'),
    );
    return this.app;
  }
}
