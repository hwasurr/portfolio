import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import { TAG_REPOSITORY } from '../../constants/inject-keys/tag.repository';
import { Tag } from './tag.entity';

export const tagProviders: Provider[] = [
  {
    provide: TAG_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Tag),
    inject: [DATA_SOURCE],
  },
];
