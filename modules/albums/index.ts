import { Album, IContext } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';

export const AlbumsMutation: {
  createAlbum: (_: null, data: Album, context: IContext) => Promise<Album>;
  updateAlbum: (_: null, data: any, context: IContext) => Promise<Album>;
  deleteAlbum: (_: null, data: { albumId: string }, context: IContext) => Promise<void>;
} = {
  createAlbum: async (_: null, data: Album, context: IContext): Promise<Album> => {
    return await http.post(ENDPOINTS.ALBUMS, data, context);
  },
  updateAlbum: async (_: null, data: any, context: IContext): Promise<Album> => {
    const { albumId }: { albumId: string } = data;
    return await http.put(`${ENDPOINTS.ALBUMS}${albumId}`, data, context);
  },
  deleteAlbum: async (_: null, data: { albumId: string }, context: IContext): Promise<void> => {
    const { albumId }: { albumId: string } = data;
    return await http.delete(`${ENDPOINTS.ALBUMS}${albumId}`, data, context);
  },
};

export const AlbumsQuery: {
  getAlbums: () => Promise<Album[]>;
  getAlbumById: (_: null, data: { id: string }) => Promise<Album>;
} = {
  getAlbums: async (): Promise<Album[]> => {
    const data = await http.get(ENDPOINTS.ALBUMS);
    return data.items;
  },
  getAlbumById: async (_: null, data: { id: string }): Promise<Album> => {
    const { id }: { id: string } = data;
    return await http.get(`${ENDPOINTS.ALBUMS}${id}`);
  },
};
