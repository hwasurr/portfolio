import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import {
  GAME_COMMENT_REPOSITORY,
  GAME_COMMENT_SUB_REPOSITORY,
  GAME_IMAGE_REPOSITORY,
  GAME_INFORMATION_REPOSITORY,
  GAME_REACTION_REPOSITORY,
  GAME_REPOSITORY,
} from '../../constants/inject-keys/game.repository';
import { GameCommentSub } from './entities/game-comment-sub.entity';
import { GameComment } from './entities/game-comment.entity';
import { GameImage } from './entities/game-image.entity';
import { GameInformation } from './entities/game-information.entity';
import { GameReaction } from './entities/game-reaction.entity';
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
  {
    provide: GAME_COMMENT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GameComment),
    inject: [DATA_SOURCE],
  },
  {
    provide: GAME_COMMENT_SUB_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GameCommentSub),
    inject: [DATA_SOURCE],
  },
  {
    provide: GAME_REACTION_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(GameReaction),
    inject: [DATA_SOURCE],
  },
];
