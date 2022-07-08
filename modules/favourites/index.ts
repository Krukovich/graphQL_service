import { IContext, IFavourites, IResponseFavourites } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import { getFavouritesWithOtherValues } from '../../utils';

export const favouritesMutation: {
  addTrackToFavourites: (_: null, data: IFavourites, context: IContext) => Promise<{}>;
  addBandToFavourites: (_: null, data: IFavourites, context: IContext) => Promise<{}>;
  addArtistToFavourites: (_: null, data: IFavourites, context: IContext) => Promise<{}>;
  addGenreToFavourites: (_: null, data: IFavourites, context: IContext) => Promise<{}>;
  deleteTrackFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<void>;
  deleteBandFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<void>;
  deleteArtistFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<void>;
  deleteGenreFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<void>;
} = {
  addTrackToFavourites: async (_: null, data: IFavourites, context: IContext) => {
    const response: IResponseFavourites = await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);

    return getFavouritesWithOtherValues(response);
  },
  addBandToFavourites: async (_: null, data: IFavourites, context: IContext) => {
    const response: IResponseFavourites = await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);

    return getFavouritesWithOtherValues(response);
  },
  addArtistToFavourites: async (_: null, data: IFavourites, context: IContext) => {
    const response: IResponseFavourites = await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);

    return getFavouritesWithOtherValues(response);
  },
  addGenreToFavourites: async (_: null, data: IFavourites, context: IContext) => {
    const response: IResponseFavourites = await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);

    return getFavouritesWithOtherValues(response);
  },
  deleteTrackFromFavourites: async (_: null, data: { id: string }, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;

    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
  deleteBandFromFavourites: async (_: null, data: { id: string }, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;

    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
  deleteArtistFromFavourites: async (_: null, data: { id: string }, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;

    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
  deleteGenreFromFavourites: async (_: null, data: { id: string }, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;

    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
};

export const favoritesQuery: {
  getFavourites: (_: null, data: null, context: IContext) => {};
} = {
  getFavourites: async (_: null, data: null, context: IContext) => {
    const response: IResponseFavourites = await http.get(ENDPOINTS.FAVOURITES.GET, context);

    return getFavouritesWithOtherValues(response);
  },
};
