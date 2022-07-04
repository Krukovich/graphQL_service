import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from '../../resolvers/resolvers';
import { IncomingMessage } from 'http';
import 'dotenv/config';

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: { req: IncomingMessage }) => {
    return {
      token: req.headers.authorization || '',
    };
  },
});
const PORT: string | number = process.env.PORT || 4001;

server
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log('server is running');
  });
