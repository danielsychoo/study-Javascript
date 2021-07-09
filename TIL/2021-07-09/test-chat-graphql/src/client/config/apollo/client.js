import { ApolloClient, createHttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

import { URI, WS_URI } from '../../../utils/constants/uriConstant';
import { cache } from './cache';

// http 엔드포인트
const httpLink = createHttpLink({
  uri: URI,
});

// WebSocket 엔드포인트
const wsLink = new WebSocketLink({
  uri: WS_URI,
  options: {
    reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: splitLink,
  cache,
  defaultOptions: {
    watchQuery: { fetchPolicy: 'cache-and-network' }, // subscription fetchPolicy
    query: { fetchPolicy: 'network-only' }, // query fetchPolicy
  },
});
