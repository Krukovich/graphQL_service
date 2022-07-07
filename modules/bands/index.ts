import { Band, IContext } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import { checkParams, insertQueryParamsInURL } from '../../utils';
import { genresQuery } from '../genres';

export const bandsMutation: {
  createBand: (_: null, data: Band, context: IContext) => Promise<Band>;
  updateBand: (_: null, data: Band, context: IContext) => Promise<Band>;
  deleteBand: (_: null, data: Band, context: IContext) => Promise<void>;
} = {
  createBand: async (_: null, data: Band, context: IContext): Promise<Band> => {
    return await http.post(ENDPOINTS.BANDS, data, context);
  },
  updateBand: async (_: null, data: Band, context: IContext): Promise<Band> => {
    const { id }: { id: string } = data;
    return await http.put(`${ENDPOINTS.BANDS}/${id}`, data, context);
  },
  deleteBand: async (_: null, data: Band, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.BANDS}/${id}`, data, context);
  },
};

export const bandsQuery: {
  getBands: (_: null, data: { limit: number; offset: number }) => Promise<Band[]>;
  getBandById: (_: null, data: { id: string }) => Promise<Band>;
} = {
  getBands: async (_: null, data: { limit: number; offset: number }) => {
    const { limit, offset }: { limit: number; offset: number } = data;
    const arg = {
      limit,
      offset,
      url: `${ENDPOINTS.BANDS}`,
    };
    const response: { items: Band[] } = await http.get(
      checkParams(limit, offset) ? insertQueryParamsInURL(arg) : arg.url,
    );

    return response.items.map((item: Band) => {
      return {
        ...item,
        genres: item.genresIds.length
          ? item.genresIds.map(async (id: string) => await genresQuery.getGenreById(_, { id: id }))
          : [],
      };
    });
  },
  getBandById: async (_: null, data: { id: string }) => {
    const { id }: { id: string } = data;
    const response: Band = await http.get(`${ENDPOINTS.BANDS}/${id}`);

    return {
      ...response,
      genres: response.genresIds.length
        ? response.genresIds.map(async (id: string) => await genresQuery.getGenreById(_, { id: id }))
        : [],
    };
  },
};
