import HTTP from '../service';
import { ENDPOINTS } from '../constatns';
import { Artist } from '../interfaces';

export const resolvers: { Query: { getArtist: () => Promise<Artist> } } = {
  Query: {
    getArtist: async (): Promise<Artist> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.GET_ARTIST);
      return data.items;
    },
  },
};
