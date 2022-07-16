import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { commentProviders } from './comment.providers';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { SubCommentResolver } from './sub-comment.resolver';
import { SubCommentService } from './sub-comment.service';

@Module({
  imports: [DatabaseModule],
  exports: [CommentService],
  providers: [
    ...commentProviders,
    CommentService,
    CommentResolver,
    SubCommentService,
    SubCommentResolver,
  ],
})
export class CommentModule {}
