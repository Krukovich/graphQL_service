import { Favorite } from '../../interfaces';
import HTTP from '../../service';
import { ENDPOINTS } from '../../constatns';

//TODO ADD MUTATION
export const FavouritesMutation = {
  addTrackToFavourites: () => {
    const http: HTTP = new HTTP();
  },
  addBandToFavourites: () => {
    const http: HTTP = new HTTP();
  },
  addArtistToFavourites: () => {
    const http: HTTP = new HTTP();
  },
  addGenreToFavourites: () => {
    const http: HTTP = new HTTP();
  },
};

export const FavoritesQuery: {
  getFavourites: () => Promise<Favorite[]>;
} = {
  getFavourites: async (): Promise<Favorite[]> => {
    const http: HTTP = new HTTP();
    const data = await http.get(ENDPOINTS.GET_FAVOURITES);
    return data.items;
  },
};
