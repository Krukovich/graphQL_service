import { ApolloServer } from 'apollo-server';
import { IncomingMessage } from 'http';
import { resolvers } from '../resolvers/resolvers';
import { typeArtist } from '../modules/artists/schema';
import { typeAlbum } from '../modules/albums/schema';
import { typeUser } from '../modules/users/schema';
import { typeGenre } from '../modules/genres/schema';
import { typeBand } from '../modules/bands/schema';
import { typeTrack } from '../modules/tracks/schema';
import { typeFavourites } from '../modules/favourites/schema';
import 'dotenv/config';

const server: ApolloServer = new ApolloServer({
  typeDefs: [typeArtist, typeAlbum, typeUser, typeGenre, typeBand, typeTrack, typeFavourites],
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
