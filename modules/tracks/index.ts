import { IContext, Track } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import { checkParams, insertQueryParamsInURL } from '../../utils';
import { artistQuery } from '../artists';
import { bandsQuery } from '../bands';
import { genresQuery } from '../genres';

export const tracksMutation: {
  createTrack: (_: null, data: Track, context: IContext) => Promise<Track>;
  updateTrack: (_: null, data: Track, context: IContext) => Promise<Track>;
  deleteTrack: (_: null, data: Track, context: IContext) => Promise<void>;
} = {
  createTrack: async (_: null, data: Track, context: IContext): Promise<Track> => {
    return await http.post(ENDPOINTS.TRACKS, data, context);
  },
  updateTrack: async (_: null, data: Track, context: IContext): Promise<Track> => {
    const { id }: { id: string } = data;
    return await http.put(`${ENDPOINTS.TRACKS}/${id}`, data, context);
  },
  deleteTrack: async (_: null, data: { id: string }, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.TRACKS}/${id}`, data, context);
  },
};

export const tracksQuery: {
  getTracks: (_: null, data: { limit: number; offset: number }) => Promise<Track[]>;
  getTrackById: (_: null, data: { id: string }) => Promise<Track>;
} = {
  getTracks: async (_: null, data: { limit: number; offset: number }) => {
    const { limit, offset }: { limit: number; offset: number } = data;
    const arg = {
      limit,
      offset,
      url: `${ENDPOINTS.TRACKS}`,
    };
    const response: { items: Track[] } = await http.get(
      checkParams(limit, offset) ? insertQueryParamsInURL(arg) : arg.url,
    );

    return response.items.map((item: Track) => {
      return {
        ...item,
        artists: item.artistsIds.length
          ? item.artistsIds.map((id: string) => artistQuery.getArtistById(_, { id: id }))
          : [],
        bands: item.bandsIds.length ? item.bandsIds.map((id: string) => bandsQuery.getBandById(_, { id: id })) : [],
        genres: item.genresIds.length
          ? item.genresIds.map((id: string) => genresQuery.getGenreById(_, { id: id }))
          : [],
      };
    });
  },
  getTrackById: async (_: null, data: { id: string }) => {
    const { id }: { id: string } = data;
    const response: Track = await http.get(`${ENDPOINTS.TRACKS}/${id}`);

    return {
      ...response,
      artists: response.artistsIds.length
        ? response.artistsIds.map((id: string) => artistQuery.getArtistById(_, { id: id }))
        : [],
      bands: response.bandsIds.length
        ? response.bandsIds.map((id: string) => bandsQuery.getBandById(_, { id: id }))
        : [],
      genres: response.genresIds.length
        ? response.genresIds.map((id: string) => genresQuery.getGenreById(_, { id: id }))
        : [],
    };
  },
};
