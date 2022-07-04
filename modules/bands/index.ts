import { Band, IContext } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';

export const BandsMutation: {
  createBand: (_: null, data: Band, context: IContext) => Promise<Band>;
  updateBand: (_: null, data: Band, context: IContext) => Promise<Band>;
  deleteBand: (_: null, data: Band, context: IContext) => Promise<void>;
} = {
  createBand: async (_: null, data: Band, context: IContext): Promise<Band> => {
    return await http.post(ENDPOINTS.BANDS, data, context);
  },
  updateBand: async (_: null, data: Band, context: IContext): Promise<Band> => {
    const { id }: { id: string } = data;
    return await http.put(`${ENDPOINTS.BANDS}${id}`, data, context);
  },
  deleteBand: async (_: null, data: Band, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.BANDS}${id}`, data, context);
  },
};

export const BandsQuery: {
  getBands: () => Promise<Band[]>;
  getBandById: (_: null, data: { id: string }) => Promise<Band>;
} = {
  getBands: async (): Promise<Band[]> => {
    const data = await http.get(ENDPOINTS.BANDS);
    return data.items;
  },
  getBandById: async (_: null, data: { id: string }): Promise<Band> => {
    const { id }: { id: string } = data;
    return await http.get(`${ENDPOINTS.BANDS}${id}`);
  },
};
