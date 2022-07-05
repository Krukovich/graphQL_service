import { artistMutation, artistQuery } from '../modules/artists';
import { usersMutations, usersQuery } from '../modules/users';
import { genresMutation, genresQuery } from '../modules/genres';
import { bandsMutation, bandsQuery } from '../modules/bands';
import { albumsMutation, albumsQuery } from '../modules/albums';
import { tracksMutation, tracksQuery } from '../modules/tracks';
import { favouritesMutation, favoritesQuery } from '../modules/favourites';

// TODO ADD PAGINATION
// TODO ADD FULL RESOLVERS
// TODO TRY GET ALL DATA WITH ANOTHER RESOLVERS
export const resolvers = {
  Query: {
    ...usersQuery,
    ...artistQuery,
    ...genresQuery,
    ...bandsQuery,
    ...albumsQuery,
    ...tracksQuery,
    ...favoritesQuery,
  },
  Mutation: {
    ...usersMutations,
    ...artistMutation,
    ...genresMutation,
    ...bandsMutation,
    ...albumsMutation,
    ...tracksMutation,
    ...favouritesMutation,
  },
};
