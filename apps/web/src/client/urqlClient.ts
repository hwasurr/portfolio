import { createClient } from 'urql';
import { TokenManager } from '../utils/token-manager/tokenManager';

export const urqlClient = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: () => {
    // TODO : This is only for dev, need to be deleted when production is readied
    return {
      headers: {
        authorization: `Bearer ${TokenManager.getAccessToken()}`,
      },
    };
  },
  // exchanges: [],
});
