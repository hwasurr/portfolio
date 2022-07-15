import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { CommentModule } from './modules/comment/comment.module';
import { GameModule } from './modules/game/game.module';
import { TagModule } from './modules/tag/tag.module';
import { UserModule } from './modules/user/user.module';
import { configValidate } from './settings/env.config';
import { GraphQLModuleSetting } from './settings/graphql.setting';

@Module({
  imports: [
    ConfigModule.forRoot({ validate: configValidate, isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphQLModuleSetting,
    }),
    AuthModule,
    UserModule,
    GameModule,
    CommentModule,
    TagModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
