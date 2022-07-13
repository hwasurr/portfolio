import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { USER_REPOSITORY } from '../../constants/inject-keys/user.repository';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import { User } from './user.entity';

export const userProviders: Provider[] = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];
