import { Album, IContext } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import { checkParams, insertQueryParamsInURL } from '../../utils';
import { artistQuery } from '../artists';
import { bandsQuery } from '../bands';
import { tracksQuery } from '../tracks';
import { genresQuery } from '../genres';

export const albumsMutation: {
  createAlbum: (_: null, data: Album, context: IContext) => Promise<Album>;
  updateAlbum: (_: null, data: Album, context: IContext) => Promise<Album>;
  deleteAlbum: (_: null, data: { id: string }, context: IContext) => Promise<void>;
} = {
  createAlbum: async (_: null, data: Album, context: IContext): Promise<Album> => {
    return await http.post(ENDPOINTS.ALBUMS, data, context);
  },
  updateAlbum: async (_: null, data: Album, context: IContext): Promise<Album> => {
    const { id }: { id: string } = data;
    return await http.put(`${ENDPOINTS.ALBUMS}/${id}`, data, context);
  },
  deleteAlbum: async (_: null, data: { id: string }, context: IContext): Promise<void> => {
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
        artists: item.artistsIds.length
          ? item.artistsIds.map((id: string) => artistQuery.getArtistById(_, { id: id }))
          : [],
        bands: item.bandsIds.length ? item.bandsIds.map((id: string) => bandsQuery.getBandById(_, { id: id })) : [],
        tracks: item.trackIds.length ? item.trackIds.map((id: string) => tracksQuery.getTrackById(_, { id: id })) : [],
        genres: item.genresIds.length
          ? item.genresIds.map((id: string) => genresQuery.getGenreById(_, { id: id }))
          : [],
      };
    });
  },
  getAlbumById: async (_: null, data: { id: string }) => {
    const { id }: { id: string } = data;
    const response: Album = await http.get(`${ENDPOINTS.ALBUMS}/${id}`);

    return {
      ...response,
      artists: response.artistsIds.length
        ? response.artistsIds.map((id: string) => artistQuery.getArtistById(_, { id: id }))
        : [],
      bands: response.bandsIds.length
        ? response.bandsIds.map((id: string) => bandsQuery.getBandById(_, { id: id }))
        : [],
      tracks: response.trackIds.length
        ? response.trackIds.map((id: string) => tracksQuery.getTrackById(_, { id: id }))
        : [],
      genres: response.genresIds.length
        ? response.genresIds.map((id: string) => genresQuery.getGenreById(_, { id: id }))
        : [],
    };
  },
};
