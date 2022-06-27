import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';

const server: ApolloServer = new ApolloServer({ typeDefs });

server.listen().then(() => {
  console.log('server is running');
});
