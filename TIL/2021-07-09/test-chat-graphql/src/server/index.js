import { GraphQLServer, PubSub } from 'graphql-yoga';

const pubsub = new PubSub();
const NEW_CHAT = 'NEW_CHAT';

let chattingLog = [
  {
    id: 0,
    writer: 'admin',
    description: 'HELLO',
  },
];

const typeDefs = `
  type Chat {
    id: Int!
    writer: String!
    description: String!
  }
  type Query {
    chatting: [Chat]!
  }
  type Mutation {
    write(writer: String!, description: String!): String!
  }
  type Subscription {
    newChat: Chat
  }
`;

const resolvers = {
  Query: {
    chatting: () => {
      return chattingLog;
    },
  },
  Mutation: {
    write: (_, { writer, description }) => {
      const id = chattingLog.length;
      const newChat = { id, writer, description };
      chattingLog.push(newChat);

      pubsub.publish(NEW_CHAT, { newChat }); // ? (2) NEW_CHAT 토픽에게 newChat을 발행

      return '[server] write chat complete';
    },
  },
  Subscription: {
    newChat: {
      subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_CHAT), // ? (1) NEW_CHAT이라는 토픽을 구독하면
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(() =>
  console.log(`[Server] 'localhost:4000' 으로 GraphQL 서버 연결됨!!!!!!`),
);
