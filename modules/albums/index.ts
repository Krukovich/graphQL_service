import { Album } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

//TODO ADD MUTATION
export const AlbumsMutation = {
  createAlbum: () => {
    const http: HTTP = new HTTP();
  },
  deleteAlbum: () => {
    const http: HTTP = new HTTP();
  },
  updateAlbum: () => {
    const http: HTTP = new HTTP();
  },
};

export const AlbumsQuery: {
  getAlbums: () => Promise<Album[]>;
} = {
  getAlbums: async (): Promise<Album[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.GET_ALBUMS);
    return data.items;
  },
};
