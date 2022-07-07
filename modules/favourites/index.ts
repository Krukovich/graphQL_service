import { Artist, Band, Favorite, Genre, IContext, IFavourites, IResponseFavourites, Track } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import { bandsQuery } from '../bands';
import { genresQuery } from '../genres';
import { artistQuery } from '../artists';
import { tracksQuery } from '../tracks';

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
  getFavourites: (
    _: null,
    data: null,
    context: IContext,
  ) => Promise<{
    artists: () => Promise<Artist>[];
    genres: () => Promise<Genre>[];
    bands: () => Promise<Band>[];
    tracks: () => Promise<Track>[];
    userId: string;
  }>;
} = {
  getFavourites: async (
    _: null,
    data: null,
    context: IContext,
  ): Promise<{
    artists: () => Promise<Artist>[];
    genres: () => Promise<Genre>[];
    bands: () => Promise<Band>[];
    tracks: () => Promise<Track>[];
    userId: string;
  }> => {
    const response: IResponseFavourites = await http.get(ENDPOINTS.FAVOURITES.GET, context);
    return {
      userId: response.userId,
      bands: () => {
        return response.bandsIds.length
          ? response.bandsIds.map(async (id: string) => await bandsQuery.getBandById(_, { id: id }))
          : [];
      },
      genres: () => {
        return response.genresIds.length
          ? response.genresIds.map(async (id: string) => await genresQuery.getGenreById(_, { id: id }))
          : [];
      },
      artists: () => {
        return response.artistsIds.length
          ? response.artistsIds.map(async (id: string) => await artistQuery.getArtistById(_, { id: id }))
          : [];
      },
      tracks: () => {
        return response.tracksIds.length
          ? response.tracksIds.map(async (id: string) => await tracksQuery.getTrackById(_, { id: id }))
          : [];
      },
    };
  },
};
