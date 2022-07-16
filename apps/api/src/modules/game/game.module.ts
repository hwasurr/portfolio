import { forwardRef, Module } from '@nestjs/common';
import { CommentModule } from '../comment/comment.module';
import { DatabaseModule } from '../database/database.module';
import { ReactionModule } from '../reaction/reaction.module';
import { TagModule } from '../tag/tag.module';
import { GameTagService } from './game-tag.service';
import { gameProviders } from './game.providers';
import { GameResolver } from './game.resolver';
import { GameService } from './game.service';

@Module({
  imports: [DatabaseModule, CommentModule, forwardRef(() => ReactionModule), TagModule],
  exports: [GameService],
  providers: [...gameProviders, GameService, GameResolver, GameTagService],
  controllers: [],
})
export class GameModule {}
