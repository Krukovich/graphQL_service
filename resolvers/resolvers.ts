import HTTP from '../service';
import { ENDPOINTS } from '../constatns';
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
    getJWT: async (): Promise<string> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.GET_JWT);
      return data.items;
    },
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
