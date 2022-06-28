import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from '../../resolvers/resolvers';

const server: ApolloServer = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log('server is running');
});
