import { Album, IContext } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import {
  checkParams,
  getArtistWithOtherValues,
  getBandsWithOtherValues,
  getGenresWithOtherValues,
  getTracksWithOtherValues,
  insertQueryParamsInURL,
} from '../../utils';

export const albumsMutation: {
  createAlbum: (_: null, data: Album, context: IContext) => Promise<Album>;
  updateAlbum: (_: null, data: Album, context: IContext) => Promise<Album>;
  deleteAlbum: (_: null, data: { id: string }, context: IContext) => Promise<void>;
} = {
  createAlbum: async (_: null, data: Album, context: IContext) => {
    const response: Album = await http.post(ENDPOINTS.ALBUMS, data, context);

    return {
      ...response,
      artists: response.artistsIds.length ? getArtistWithOtherValues(response.artistsIds) : [],
      bands: response.bandsIds.length ? getBandsWithOtherValues(response.bandsIds) : [],
      tracks: response.trackIds.length ? getTracksWithOtherValues(response.trackIds) : [],
      genres: response.genresIds.length ? getGenresWithOtherValues(response.genresIds) : [],
    };
  },
  updateAlbum: async (_: null, data: Album, context: IContext) => {
    const { id }: { id: string } = data;
    const response: Album = await http.put(`${ENDPOINTS.ALBUMS}/${id}`, data, context);

    return {
      ...response,
      artists: response.artistsIds.length ? getArtistWithOtherValues(response.artistsIds) : [],
      bands: response.bandsIds.length ? getBandsWithOtherValues(response.bandsIds) : [],
      tracks: response.trackIds.length ? getTracksWithOtherValues(response.trackIds) : [],
      genres: response.genresIds.length ? getGenresWithOtherValues(response.genresIds) : [],
    };
  },
  deleteAlbum: async (_: null, data: { id: string }, context: IContext) => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.ALBUMS}/${id}`, data, context);
  },
};

export const albumsQuery: {
  getAlbums: (_: null, data: { limit: number; offset: number }) => Promise<Album[]>;
  getAlbumById: (_: null, data: { id: string }) => Promise<Album>;
} = {
  getAlbums: async (_: null, data: { limit: number; offset: number }) => {
    const { limit, offset }: { limit: number; offset: number } = data;
    const arg = {
      limit,
      offset,
      url: `${ENDPOINTS.ALBUMS}`,
    };
    const response: { items: Album[] } = await http.get(
      checkParams(limit, offset) ? insertQueryParamsInURL(arg) : arg.url,
    );

    return response.items.map((item: Album) => {
      return {
        ...item,
        artists: item.artistsIds.length ? getArtistWithOtherValues(item.artistsIds) : [],
        bands: item.bandsIds.length ? getBandsWithOtherValues(item.bandsIds) : [],
        tracks: item.trackIds.length ? getTracksWithOtherValues(item.trackIds) : [],
        genres: item.genresIds.length ? getGenresWithOtherValues(item.genresIds) : [],
      };
    });
  },
  getAlbumById: async (_: null, data: { id: string }) => {
    const { id }: { id: string } = data;
    const response: Album = await http.get(`${ENDPOINTS.ALBUMS}/${id}`);

    return {
      ...response,
      artists: response.artistsIds.length ? getArtistWithOtherValues(response.artistsIds) : [],
      bands: response.bandsIds.length ? getBandsWithOtherValues(response.bandsIds) : [],
      tracks: response.trackIds.length ? getTracksWithOtherValues(response.trackIds) : [],
      genres: response.genresIds.length ? getGenresWithOtherValues(response.genresIds) : [],
    };
  },
};
