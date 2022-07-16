import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  exports: [UserService],
  providers: [...userProviders, UserService, UserResolver],
  controllers: [],
})
export class UserModule {}
