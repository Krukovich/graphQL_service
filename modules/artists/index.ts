import { Artist, IContext } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

export const ArtistMutation: {
  createArtist: (_: null, data: Artist, context: IContext) => Promise<Artist>;
  updateArtist: (_: null, data: Artist, context: IContext) => Promise<Artist>;
  deleteArtist: (_: null, data: { artistId: string }, context: IContext) => Promise<Artist>;
} = {
  createArtist: async (_: null, data: Artist, context: IContext) => {
    const http = new HTTP();
    return await http.post(ENDPOINTS.ARTIST, data, context);
  },
  updateArtist: async (_: null, data: Artist, context: IContext): Promise<Artist> => {
    const http = new HTTP();
    return await http.put(ENDPOINTS.ARTIST, data, context);
  },
  deleteArtist: async (_: null, data: { artistId: string }, context: IContext) => {
    const { artistId }: { artistId: string } = data;
    const http: HTTP = new HTTP();
    return await http.delete(`${ENDPOINTS.ARTIST}${artistId}`, data, context);
  },
};

export const ArtistQuery: {
  getArtist: () => Promise<Artist[]>;
  getArtistById: (_: null, data: { id: string }) => Promise<Artist>;
} = {
  getArtist: async (): Promise<Artist[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.ARTIST);
    return data.items;
  },
  getArtistById: async (_: null, data: { id: string }) => {
    const { id }: { id: string } = data;
    const http: HTTP = new HTTP();
    return await http.get(`${ENDPOINTS.ARTIST}${id}`);
  },
};
