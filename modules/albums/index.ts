import { Album, IContext } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';
import { checkParams, insertQueryParamsInURL } from '../../utils';

export const albumsMutation: {
  createAlbum: (_: null, data: Album, context: IContext) => Promise<Album>;
  updateAlbum: (_: null, data: Album, context: IContext) => Promise<Album>;
  deleteAlbum: (_: null, data: { id: string }, context: IContext) => Promise<void>;
} = {
  createAlbum: async (_: null, data: Album, context: IContext): Promise<Album> => {
    return await http.post(ENDPOINTS.ALBUMS, data, context);
  },
  updateAlbum: async (_: null, data: Album, context: IContext): Promise<Album> => {
    const { id }: { id: string } = data;
    return await http.put(`${ENDPOINTS.ALBUMS}/${id}`, data, context);
  },
  deleteAlbum: async (_: null, data: { id: string }, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.ALBUMS}/${id}`, data, context);
  },
};

export const albumsQuery: {
  getAlbums: (_: null, data: { limit: number; offset: number }) => Promise<Album[]>;
  getAlbumById: (_: null, data: { id: string }) => Promise<Album>;
} = {
  getAlbums: async (_: null, data: { limit: number; offset: number }): Promise<Album[]> => {
    const { limit, offset }: { limit: number; offset: number } = data;
    const arg = {
      limit,
      offset,
      url: `${ENDPOINTS.ALBUMS}`,
    };
    const response: { items: Album[] } = await http.get(
      checkParams(limit, offset) ? insertQueryParamsInURL(arg) : arg.url,
    );
    return response.items;
  },
  getAlbumById: async (_: null, data: { id: string }): Promise<Album> => {
    const { id }: { id: string } = data;
    return await http.get(`${ENDPOINTS.ALBUMS}/${id}`);
  },
};
