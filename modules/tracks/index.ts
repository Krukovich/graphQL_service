import { IContext, Track } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import {
  checkParams,
  getArtistWithOtherValues,
  getBandsWithOtherValues,
  getGenresWithOtherValues,
  insertQueryParamsInURL,
} from '../../utils';

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
        artists: item.artistsIds.length ? getArtistWithOtherValues(item.artistsIds) : [],
        bands: item.bandsIds.length ? getBandsWithOtherValues(item.bandsIds) : [],
        genres: item.genresIds.length ? getGenresWithOtherValues(item.genresIds) : [],
      };
    });
  },
  getTrackById: async (_: null, data: { id: string }) => {
    const { id }: { id: string } = data;
    const response: Track = await http.get(`${ENDPOINTS.TRACKS}/${id}`);

    return {
      ...response,
      artists: response.artistsIds.length ? getArtistWithOtherValues(response.artistsIds) : [],
      bands: response.bandsIds.length ? getBandsWithOtherValues(response.bandsIds) : [],
      genres: response.genresIds.length ? getGenresWithOtherValues(response.genresIds) : [],
    };
  },
};
