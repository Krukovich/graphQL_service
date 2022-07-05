import { Genre, IContext } from '../../interfaces';
import http from '../../service';
import { ENDPOINTS } from '../../constatns';

export const genresMutation: {
  createGenre: (_: null, data: Genre, context: IContext) => Promise<Genre>;
  updateGenre: (_: null, data: Genre, context: IContext) => Promise<Genre>;
  deleteGenre: (_: null, data: Genre, context: IContext) => Promise<void>;
} = {
  createGenre: async (_: null, data: Genre, context: IContext): Promise<Genre> => {
    return await http.post(ENDPOINTS.GENRES, data, context);
  },
  updateGenre: async (_: null, data: Genre, context: IContext): Promise<Genre> => {
    const { id }: { id: string } = data;
    return await http.put(`${ENDPOINTS.GENRES}${id}`, data, context);
  },
  deleteGenre: async (_: null, data: Genre, context: IContext): Promise<void> => {
    const { id }: { id: string } = data;
    return await http.delete(`${ENDPOINTS.GENRES}${id}`, data, context);
  },
};

export const genresQuery: {
  getGenres: () => Promise<Genre[]>;
  getGenreById: (_: null, data: { id: string }) => Promise<Genre>;
} = {
  getGenres: async (): Promise<Genre[]> => {
    const data = await http.get(ENDPOINTS.GENRES);
    return data.items;
  },
  getGenreById: async (_: null, data: { id: string }): Promise<Genre> => {
    const { id }: { id: string } = data;
    return await http.get(`${ENDPOINTS.GENRES}${id}`);
  },
};
