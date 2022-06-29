import HTTP from '../service';
import { ENDPOINTS } from '../constatns';
import { ArtistMutation } from '../modules/artists';
import { UsersMutations } from '../modules/users';
import { Album, Artist, Band, Favorite, Genre, Track, User } from '../interfaces';

export const resolvers: {
  Query: {
    getArtist: () => Promise<Artist[]>;
    getGenres: () => Promise<Genre[]>;
    getTracks: () => Promise<Track[]>;
    getBands: () => Promise<Band[]>;
    getAlbums: () => Promise<Album[]>;
    getUsers: () => Promise<User[]>;
    getFavourites: () => Promise<Favorite[]>; //TODO (available only for logged in user)
    getJWT: () => Promise<string>;
  };
  Mutation: {
    //TODO ADD ANOTHER MUTATIONS TYPES
    createArtist: (data: Artist) => Promise<Artist>;
    updateArtist: (data: Artist) => Promise<Artist>;
    deleteArtist: () => void;
  };
} = {
  Query: {
    getArtist: async (): Promise<Artist[]> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.ARTIST.GET);
      return data.items;
    },
    getGenres: async (): Promise<Genre[]> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.GET_GENRES);
      return data.items;
    },
    getTracks: async (): Promise<Track[]> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.GET_TRACKS);
      return data.items;
    },
    getBands: async (): Promise<Band[]> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.GET_BANDS);
      return data.items;
    },
    getAlbums: async (): Promise<Album[]> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.GET_ALBUMS);
      return data.items;
    },
    getUsers: async (): Promise<User[]> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.USERS.GET_USERS);
      return data.items;
    },
    getFavourites: async (): Promise<Favorite[]> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.GET_FAVOURITES);
      return data.items;
    },
    getJWT: async (): Promise<string> => {
      const http: HTTP = new HTTP();
      const data = await http.get(ENDPOINTS.GET_JWT);
      return data.items;
    },
  },
  Mutation: {
    ...ArtistMutation,
    ...UsersMutations,
  },
};
