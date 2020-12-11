import { ApolloClient, InMemoryCache } from '@apollo/client';

import config from '../config';

export const apolloClient = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${atob(config.githubConvertedToken)}`,
  },
});
