import { Artist, Genre } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

//TODO ADD MUTATION
export const GenresMutation = {
  createGenre: async () => {
    const http: HTTP = new HTTP();
  },
  deleteGenre: async () => {
    const http: HTTP = new HTTP();
  },
  updateGenre: async () => {
    const http: HTTP = new HTTP();
  },
};

export const GenresQuery: {
  getGenres: () => Promise<Genre[]>;
} = {
  getGenres: async (): Promise<Genre[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.GENRES);
    return data.items;
  },
};
