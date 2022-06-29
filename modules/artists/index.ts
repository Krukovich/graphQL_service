import { Artist, IContext } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

export const ArtistMutation: {
  createArtist: (_: null, data: Artist, context: IContext) => Promise<Artist>;
  updateArtist: (_: null, data: Artist, context: IContext) => Promise<Artist>;
  deleteArtist: () => void;
} = {
  createArtist: async (_: null, data: Artist, context: IContext) => {
    const http = new HTTP();
    return await http.post(ENDPOINTS.ARTIST.SAVE, data, context);
  },
  updateArtist: async (_: null, data: Artist, context: IContext): Promise<Artist> => {
    const http = new HTTP();
    return await http.post(ENDPOINTS.ARTIST.SAVE, data, context);
  },
  //TODO ADD LOGIC FOR DELETE
  deleteArtist: () => {},
};

export const ArtistQuery: {
  getArtist: () => Promise<Artist[]>;
} = {
  getArtist: async (): Promise<Artist[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.ARTIST.GET);
    return data.items;
  },
};
