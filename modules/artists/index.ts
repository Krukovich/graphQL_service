import { Artist, IContext } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import { checkParams, insertQueryParamsInURL } from '../../utils';

export const artistMutation: {
  createArtist: (_: null, data: Artist, context: IContext) => Promise<Artist>;
  updateArtist: (_: null, data: Artist, context: IContext) => Promise<Artist>;
  deleteArtist: (_: null, data: { id: string }, context: IContext) => Promise<void>;
} = {
  createArtist: async (_: null, data: Artist, context: IContext): Promise<Artist> => {
    return await http.post(ENDPOINTS.ARTIST, data, context);
  },
  updateArtist: async (_: null, data: Artist, context: IContext): Promise<Artist> => {
    const { id }: { id: string } = data;
    return await http.put(`${ENDPOINTS.ARTIST}/${id}`, data, context);
  },
  deleteArtist: async (_: null, data: { id: string }, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.ARTIST}/${id}`, data, context);
  },
};

export const artistQuery: {
  getArtist: (_: null, data: { limit: number; offset: number }) => Promise<Artist[]>;
  getArtistById: (_: null, data: { id: string }) => Promise<Artist>;
} = {
  getArtist: async (_: null, data: { limit: number; offset: number }): Promise<Artist[]> => {
    const { limit, offset }: { limit: number; offset: number } = data;
    const arg = {
      limit,
      offset,
      url: `${ENDPOINTS.ARTIST}`,
    };
    const response: { items: Artist[] } = await http.get(
      checkParams(limit, offset) ? insertQueryParamsInURL(arg) : arg.url,
    );
    return response.items;
  },
  getArtistById: async (_: null, data: { id: string }): Promise<Artist> => {
    const { id }: { id: string } = data;
    return await http.get(`${ENDPOINTS.ARTIST}/${id}`);
  },
};
