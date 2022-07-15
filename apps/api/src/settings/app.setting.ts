import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

export class AppSetting {
  constructor(
    private readonly app: NestExpressApplication,
    private readonly configService: ConfigService,
  ) {}

  public initialize(): NestExpressApplication {
    // Some API settings are located here.

    this.app.use(
      helmet({
        crossOriginEmbedderPolicy:
          process.env.NODE_ENV === 'production' ? undefined : false,
        contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
      }),
    );
    this.app.use(cors());
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(
      cookieParser(this.configService.get('COOKIE_SECRET') || 'COOKIE_SECRET'),
    );
    // this.app.use(morgan('common'));
    return this.app;
  }
}
