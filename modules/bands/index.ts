import { Band, IContext } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

export const BandsMutation: {
  createBand: (_: null, data: Band, context: IContext) => Promise<Band>;
  updateBand: (_: null, data: Band, context: IContext) => Promise<Band>;
  deleteBand: (_: null, data: Band, context: IContext) => Promise<Band>;
} = {
  createBand: async (_: null, data: Band, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.post(ENDPOINTS.BANDS, data, context);
  },
  updateBand: async (_: null, data: Band, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.put(ENDPOINTS.BANDS, data, context);
  },
  deleteBand: async (_: null, data: Band, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.delete(ENDPOINTS.BANDS, data, context);
  },
};

export const BandsQuery: {
  getBands: () => Promise<Band[]>;
  getBandById: (_: null, data: { id: string }) => Promise<Band>;
} = {
  getBands: async (): Promise<Band[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.BANDS);
    return data.items;
  },
  getBandById: async (_: null, data: { id: string }) => {
    const { id }: { id: string } = data;
    const http: HTTP = new HTTP();
    return await http.get(`${ENDPOINTS.BANDS}${id}`);
  },
};
