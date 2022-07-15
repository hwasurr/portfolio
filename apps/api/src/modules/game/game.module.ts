import { Module } from '@nestjs/common';
import { CommentModule } from '../comment/comment.module';
import { DatabaseModule } from '../database/database.module';
import { ReactionModule } from '../reaction/reaction.module';
import { GameController } from './game.controller';
import { gameProviders } from './game.providers';
import { GameResolver } from './game.resolver';
import { GameService } from './game.service';

@Module({
  imports: [DatabaseModule, CommentModule, ReactionModule],
  exports: [],
  providers: [...gameProviders, GameService, GameResolver],
  controllers: [GameController],
})
export class GameModule {}
