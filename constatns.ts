import 'dotenv/config';

const API_URL = process.env.API_URL;

export const ENDPOINTS = {
  GET_FAVOURITES: 'http://localhost:3007/v1/favourites/',
  USERS: {
    REGISTER: `${API_URL}/users/register`,
    LOGIN: `${API_URL}/users/login/`,
    GET: `${API_URL}/users/`,
  },
  ARTIST: `${API_URL}/artists/`,
  ALBUMS: `${API_URL}/albums/`,
  GENRES: `${API_URL}/genres/`,
  TRACKS: `${API_URL}/tracks/`,
  BANDS: `${API_URL}/bands/`,
};

export const METHOD: { GET: string; POST: string; PUT: string; DELETE: string } = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const HEADERS: { 'Content-Type': string } = { 'Content-Type': 'application/json' };
