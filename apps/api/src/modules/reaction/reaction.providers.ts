import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import { GAME_REACTION_REPOSITORY } from '../../constants/inject-keys/game.repository';
import { GameReaction } from './game-reaction.entity';

export const reactionProviders: Provider[] = [
  {
    provide: GAME_REACTION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GameReaction),
    inject: [DATA_SOURCE],
  },
];
