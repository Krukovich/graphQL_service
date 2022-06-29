import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from '../../resolvers/resolvers';
import 'dotenv/config';

const server: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: { req: any }) => {
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
