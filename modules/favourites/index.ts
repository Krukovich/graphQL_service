import { Favorite, IContext, IFavourites, IResponseFavourites } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import {
  getArtistWithOtherValues,
  getBandsWithOtherValues,
  getGenresWithOtherValues,
  getTracksWithOtherValues,
} from '../../utils';

export const favouritesMutation: {
  addTrackToFavourites: (_: null, data: IFavourites, context: IContext) => Promise<Favorite>;
  addBandToFavourites: (_: null, data: IFavourites, context: IContext) => Promise<Favorite>;
  addArtistToFavourites: (_: null, data: IFavourites, context: IContext) => Promise<Favorite>;
  addGenreToFavourites: (_: null, data: IFavourites, context: IContext) => Promise<Favorite>;
  deleteTrackFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<Favorite>;
  deleteBandFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<Favorite>;
  deleteArtistFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<Favorite>;
  deleteGenreFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<Favorite>;
} = {
  addTrackToFavourites: async (_: null, data: IFavourites, context: IContext): Promise<Favorite> => {
    return await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);
  },
  addBandToFavourites: async (_: null, data: IFavourites, context: IContext): Promise<Favorite> => {
    return await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);
  },
  addArtistToFavourites: async (_: null, data: IFavourites, context: IContext): Promise<Favorite> => {
    return await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);
  },
  addGenreToFavourites: async (_: null, data: IFavourites, context: IContext): Promise<Favorite> => {
    return await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);
  },
  deleteTrackFromFavourites: async (_: null, data: { id: string }, context: IContext): Promise<Favorite> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
  deleteBandFromFavourites: async (_: null, data: { id: string }, context: IContext): Promise<Favorite> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
  deleteArtistFromFavourites: async (_: null, data: { id: string }, context: IContext): Promise<Favorite> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
  deleteGenreFromFavourites: async (_: null, data: { id: string }, context: IContext): Promise<Favorite> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
};

export const favoritesQuery: {
  getFavourites: (_: null, data: null, context: IContext) => {};
} = {
  getFavourites: async (_: null, data: null, context: IContext) => {
    const response: IResponseFavourites = await http.get(ENDPOINTS.FAVOURITES.GET, context);

    return {
      userId: response.userId,
      bands: response.bandsIds.length ? getBandsWithOtherValues(response.bandsIds) : [],
      genres: response.genresIds.length ? getGenresWithOtherValues(response.genresIds) : [],
      artists: response.artistsIds.length ? getArtistWithOtherValues(response.artistsIds) : [],
      tracks: response.tracksIds.length ? await getTracksWithOtherValues(response.tracksIds) : [],
    };
  },
};
