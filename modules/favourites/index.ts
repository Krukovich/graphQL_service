import { Favorite, IContext } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

export const FavouritesMutation: {
  addTrackToFavourites: (_: null, data: { id: string; type: string }, context: IContext) => Promise<Favorite>;
  addBandToFavourites: (_: null, data: { id: string; type: string }, context: IContext) => Promise<Favorite>;
  addArtistToFavourites: (_: null, data: { id: string; type: string }, context: IContext) => Promise<Favorite>;
  addGenreToFavourites: (_: null, data: { id: string; type: string }, context: IContext) => Promise<Favorite>;
  deleteTrackFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<Favorite>;
  deleteBandFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<Favorite>;
  deleteArtistFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<Favorite>;
  deleteGenreFromFavourites: (_: null, data: { id: string }, context: IContext) => Promise<Favorite>;
} = {
  addTrackToFavourites: async (_: null, data: { id: string; type: string }, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);
  },
  addBandToFavourites: async (_: null, data: { id: string; type: string }, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);
  },
  addArtistToFavourites: async (_: null, data: { id: string; type: string }, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);
  },
  addGenreToFavourites: async (_: null, data: { id: string; type: string }, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.put(ENDPOINTS.FAVOURITES.ADD, data, context);
  },
  deleteTrackFromFavourites: async (_: null, data: { id: string }, context) => {
    const { id }: { id: string } = data;
    const http: HTTP = new HTTP();
    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
  deleteBandFromFavourites: async (_: null, data: { id: string }, context) => {
    const { id }: { id: string } = data;
    const http: HTTP = new HTTP();
    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
  deleteArtistFromFavourites: async (_: null, data: { id: string }, context) => {
    const { id }: { id: string } = data;
    const http: HTTP = new HTTP();
    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
  deleteGenreFromFavourites: async (_: null, data: { id: string }, context) => {
    const { id }: { id: string } = data;
    const http: HTTP = new HTTP();
    return await http.delete(`${ENDPOINTS.FAVOURITES.DELETE}${id}`, data, context);
  },
};

export const FavoritesQuery: {
  getFavourites: () => Promise<Favorite[]>;
  getFavouriteById: (_: null, data: { id: string }) => Promise<Favorite>;
} = {
  getFavourites: async (): Promise<Favorite[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.FAVOURITES.GET);
    return data.items;
  },
  getFavouriteById: async (_: null, data: { id: string }): Promise<Favorite> => {
    const { id }: { id: string } = data;
    const http: HTTP = new HTTP();
    return await http.get(`${ENDPOINTS.FAVOURITES.GET}${id}`);
  },
};
