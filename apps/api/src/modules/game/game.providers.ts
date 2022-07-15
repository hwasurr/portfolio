import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import {
  GAME_IMAGE_REPOSITORY,
  GAME_INFORMATION_REPOSITORY,
  GAME_REPOSITORY,
} from '../../constants/inject-keys/game.repository';
import { GameImage } from './entities/game-image.entity';
import { GameInformation } from './entities/game-information.entity';
import { Game } from './entities/game.entity';

export const gameProviders: Provider[] = [
  {
    provide: GAME_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Game),
    inject: [DATA_SOURCE],
  },
  {
    provide: GAME_IMAGE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GameImage),
    inject: [DATA_SOURCE],
  },
  {
    provide: GAME_INFORMATION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GameInformation),
    inject: [DATA_SOURCE],
  },
];
