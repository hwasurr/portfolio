import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cat/cat.module';
import { configValidate } from './settings/env.config';

@Module({
  imports: [ConfigModule.forRoot({ validate: configValidate }), CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
