import { createClient } from 'urql';

export const urqlClient = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: () => {
    // TODO : This is only for dev, need to be deleted when production is readied
    const devtoken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0IiwibG9naW5JZCI6InRlc3QiLCJ1c2VySWQiOjEsImlhdCI6MTY1ODAyODQ5MCwiZXhwIjoxNjYwNjIwNDkwfQ.07KGVSsP5F4lBDhpkN8rOx4cScB4Y2mGSdkzuTPHpDU';
    return {
      headers: {
        authorization: `Bearer ${devtoken}`,
      },
    };
  },
});
