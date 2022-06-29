import { Album, IContext } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

//TODO ADD MUTATION
export const AlbumsMutation: {
  createAlbum: (_: null, data: Album, context: IContext) => Promise<Album>;
  updateAlbum: (_: null, data: any, context: IContext) => Promise<Album>;
  deleteAlbum: () => void;
} = {
  createAlbum: async (_: null, data: Album, context: IContext) => {
    const http: HTTP = new HTTP();
    return await http.post(ENDPOINTS.ALBUMS.SAVE, data, context);
  },
  updateAlbum: async (_: null, data: any, context: IContext) => {
    const { albumId }: { albumId: string } = data;
    const http: HTTP = new HTTP();
    return await http.put(`${ENDPOINTS.ALBUMS.UPDATE}${albumId}`, data, context);
  },
  deleteAlbum: () => {
    const http: HTTP = new HTTP();
  },
};

export const AlbumsQuery: {
  getAlbums: () => Promise<Album[]>;
} = {
  getAlbums: async (): Promise<Album[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.ALBUMS.GET);
    return data.items;
  },
};
