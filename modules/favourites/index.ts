import { Favorite, IContext, IFavourites } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';

export const FavouritesMutation: {
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

export const FavoritesQuery: {
  getFavourites: (_: null, data: null, context: IContext) => Promise<Favorite[]>;
} = {
  getFavourites: async (_: null, data: null, context: IContext): Promise<Favorite[]> => {
    return await http.get(ENDPOINTS.FAVOURITES.GET, context);
  },
};
