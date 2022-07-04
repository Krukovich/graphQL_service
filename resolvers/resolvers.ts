import { ArtistMutation, ArtistQuery } from '../modules/artists';
import { UsersMutations, UsersQuery } from '../modules/users';
import { GenresMutation, GenresQuery } from '../modules/genres';
import { BandsMutation, BandsQuery } from '../modules/bands';
import { AlbumsMutation, AlbumsQuery } from '../modules/albums';
import { TracksMutation, TracksQuery } from '../modules/tracks';
import { FavoritesQuery, FavouritesMutation } from '../modules/favourites';

export const resolvers = {
  Query: {
    ...UsersQuery,
    ...ArtistQuery,
    ...GenresQuery,
    ...BandsQuery,
    ...AlbumsQuery,
    ...TracksQuery,
    ...FavoritesQuery,
  },
  Mutation: {
    ...UsersMutations,
    ...ArtistMutation,
    ...GenresMutation,
    ...BandsMutation,
    ...AlbumsMutation,
    ...TracksMutation,
    ...FavouritesMutation,
  },
};
