import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CAT_REPOSITORY } from '../../constants/inject-keys/cat.repository';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import { Cat } from './cat.entity';

export const catProviders: Provider[] = [
  {
    provide: CAT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cat),
    inject: [DATA_SOURCE],
  },
];
