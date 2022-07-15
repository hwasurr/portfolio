import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import {
  GAME_COMMENT_REPOSITORY,
  GAME_COMMENT_SUB_REPOSITORY,
} from '../../constants/inject-keys/comment.repository';
import { DATA_SOURCE } from '../../constants/inject-keys/datasource';
import { GameCommentSub } from './game-comment-sub.entity';
import { GameComment } from './game-comment.entity';

export const commentProviders: Provider[] = [
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
];
