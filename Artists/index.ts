import { Artist } from '../interfaces';
import HTTP from '../service';
import { ENDPOINTS } from '../constatns';

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
  deleteArtist: () => {},
};
