import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CatController } from './cat.controller';
import { catProviders } from './cat.provider';
import { CatService } from './cat.service';

@Module({
  imports: [DatabaseModule],
  providers: [...catProviders, CatService],
  controllers: [CatController],
})
export class CatModule {}
