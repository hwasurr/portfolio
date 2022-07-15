import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TagController } from './tag.controller';
import { tagProviders } from './tag.providers';
import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';

@Module({
  imports: [DatabaseModule],
  exports: [],
  providers: [...tagProviders, TagService, TagResolver],
  controllers: [TagController],
})
export class TagModule {}
