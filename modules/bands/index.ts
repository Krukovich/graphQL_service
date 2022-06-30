import { Band } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

//TODO ADD MUTATION
export const BandsMutation = {
  createBand: () => {
    const http: HTTP = new HTTP();
  },
  deleteBand: () => {
    const http: HTTP = new HTTP();
  },
  updateBand: () => {
    const http: HTTP = new HTTP();
  },
};

export const BandsQuery: {
  getBands: () => Promise<Band[]>;
} = {
  getBands: async (): Promise<Band[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.BANDS);
    return data.items;
  },
};
