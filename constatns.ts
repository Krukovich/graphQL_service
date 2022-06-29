export const ENDPOINTS = {
  GET_GENRES: 'http://localhost:3001/v1/genres/',
  GET_TRACKS: 'http://localhost:3006/v1/tracks/',
  GET_BANDS: 'http://localhost:3003/v1/bands/',
  GET_ALBUMS: 'http://localhost:3005/v1/albums/',
  GET_JWT: 'http://localhost:3001/v1/genres',
  GET_FAVOURITES: 'http://localhost:3007/v1/favourites/',
  USERS: {
    REGISTER: 'http://localhost:3004/v1/users/register',
    GET_USERS: 'http://localhost:3004/v1/users/',
    LOGIN: 'http://localhost:3004/v1/users/login/',
  },
  ARTIST: {
    SAVE: 'http://localhost:3002/v1/artists/',
    GET: 'http://localhost:3002/v1/artists/',
  },
};

export const METHOD: { GET: string; POST: string } = {
  GET: 'GET',
  POST: 'POST',
};

export const HEADERS: { 'Content-Type': string } = { 'Content-Type': 'application/json' };
