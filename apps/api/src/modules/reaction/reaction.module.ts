import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { reactionProviders } from './reaction.providers';
import { ReactionService } from './reaction.service';

@Module({
  imports: [DatabaseModule],
  providers: [...reactionProviders, ReactionService],
  exports: [ReactionService],
})
export class ReactionModule {}
