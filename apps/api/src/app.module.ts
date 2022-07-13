import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { GameModule } from './modules/game/game.module';
import { TagModule } from './modules/tag/tag.module';
import { UserModule } from './modules/user/user.module';
import { configValidate } from './settings/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({ validate: configValidate }),
    UserModule,
    GameModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
