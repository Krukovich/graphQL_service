import { Album, IContext } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

export const AlbumsMutation: {
  createAlbum: (_: null, data: Album, context: IContext) => Promise<Album>;
  updateAlbum: (_: null, data: any, context: IContext) => Promise<Album>;
  deleteAlbum: (_: null, data: { albumId: string }, context: IContext) => Promise<Album>;
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
  deleteAlbum: async (_: null, data: { albumId: string }, context: IContext) => {
    const { albumId }: { albumId: string } = data;
    const http: HTTP = new HTTP();
    return await http.delete(`${ENDPOINTS.ALBUMS.UPDATE}${albumId}`, data, context);
  },
};

export const AlbumsQuery: {
  getAlbums: () => Promise<Album[]>;
  getAlbumById: (_: null, data: { id: string }) => Promise<Album>;
} = {
  getAlbums: async (): Promise<Album[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.ALBUMS.GET);
    return data.items;
  },
  getAlbumById: async (_: null, data: { id: string }) => {
    const { id }: { id: string } = data;
    const http: HTTP = new HTTP();
    return await http.get(`${ENDPOINTS.ALBUMS.GET}${id}`);
  },
};
