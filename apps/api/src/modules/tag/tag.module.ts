import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { TagController } from './tag.controller';
import { tagProviders } from './tag.providers';
import { TagService } from './tag.service';

@Module({
  imports: [DatabaseModule],
  exports: [],
  providers: [...tagProviders, TagService],
  controllers: [TagController],
})
export class TagModule {}
