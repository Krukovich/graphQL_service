import { Artist } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

export const ArtistMutation: {
  createArtist: (data: Artist) => Promise<Artist>;
  updateArtist: (data: Artist) => Promise<Artist>;
  deleteArtist: () => void;
} = {
  createArtist: async (data: Artist) => {
    const http = new HTTP();
    return await http.post(ENDPOINTS.ARTIST.SAVE, data);
  },
  updateArtist: async (data: Artist): Promise<Artist> => {
    //TODO CHANGE LOGIC
    const http = new HTTP();
    return await http.post(ENDPOINTS.ARTIST.SAVE, data);
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
