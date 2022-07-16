import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { GameModule } from '../game/game.module';
import { UserModule } from '../user/user.module';
import { reactionProviders } from './reaction.providers';
import { ReactionResolver } from './reaction.resolver';
import { ReactionService } from './reaction.service';

@Module({
  imports: [DatabaseModule, UserModule, forwardRef(() => GameModule)],
  providers: [...reactionProviders, ReactionService, ReactionResolver],
  exports: [ReactionService],
})
export class ReactionModule {}
