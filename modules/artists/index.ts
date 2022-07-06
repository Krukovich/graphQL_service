import { Artist, IContext, IResponse } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import { checkParams, insertQueryParamsInURL } from '../../utils';
import { bandsQuery } from '../bands';
import { genresQuery } from '../genres';

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
  getArtist: async (_: null, data: { limit: number; offset: number }) => {
    const { limit, offset }: { limit: number; offset: number } = data;
    const arg = {
      limit,
      offset,
      url: `${ENDPOINTS.ARTIST}`,
    };
    const response: IResponse = await http.get(checkParams(limit, offset) ? insertQueryParamsInURL(arg) : arg.url);

    return response.items.map((item: Artist) => {
      return {
        ...item,
        bands: item.bandsIds.length
          ? item.bandsIds.map(async (id: string) => {
              const bands = await bandsQuery.getBandById(_, { id: id });
              return {
                ...bands,
                genres: bands.genresIds.length
                  ? bands.genresIds.map(async (id: string) => await genresQuery.getGenreById(_, { id: id }))
                  : [],
              };
            })
          : [],
      };
    });
  },
  getArtistById: async (_: null, data: { id: string }) => {
    const { id }: { id: string } = data;
    const response: Artist = await http.get(`${ENDPOINTS.ARTIST}/${id}`);

    return {
      ...response,
      bands: response.bandsIds.length
        ? response.bandsIds.map(async (id: string) => {
            const bands = await bandsQuery.getBandById(_, { id: id });
            return {
              ...bands,
              genres: bands.genresIds.length
                ? bands.genresIds.map(async (id: string) => await genresQuery.getGenreById(_, { id: id }))
                : [],
            };
          })
        : [],
    };
  },
};
