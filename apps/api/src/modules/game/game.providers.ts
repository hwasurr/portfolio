import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import { GAME_REPOSITORY } from '../../constants/inject-keys/game.repository';
import { Game } from './game.entity';

export const gameProviders: Provider[] = [
  {
    provide: GAME_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Game),
    inject: [DATA_SOURCE],
  },
];
