import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { tagProviders } from './tag.providers';
import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';

@Module({
  imports: [DatabaseModule],
  exports: [TagService],
  providers: [...tagProviders, TagService, TagResolver],
})
export class TagModule {}
