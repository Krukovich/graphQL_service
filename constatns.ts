import 'dotenv/config';

const API_URL = process.env.API_URL;
const PORT_ALBUM = process.env.PORT_ALBUM;
const PORT_ARTIST = process.env.PORT_ARTIST;
const PORT_BAND = process.env.PORT_BAND;
const PORT_GENRE = process.env.PORT_GENRE;
const PORT_TRACK = process.env.PORT_TRACK;
const PORT_USER = process.env.PORT_USER;
const PORT_FAVOURITES = process.env.PORT_FAVOURITES;

export const ENDPOINTS = {
  USERS: {
    REGISTER: `${API_URL}:${PORT_USER}/v1/users/register`,
    LOGIN: `${API_URL}:${PORT_USER}/v1/users/login/`,
    GET: `${API_URL}:${PORT_USER}/v1/users/`,
  },
  FAVOURITES: {
    GET: `${API_URL}:${PORT_FAVOURITES}/v1/favourites/`,
    ADD: `${API_URL}:${PORT_FAVOURITES}/v1/favourites/add`,
    PUT: `${API_URL}:${PORT_FAVOURITES}/v1/favourites/remove`,
    DELETE: `${API_URL}:${PORT_FAVOURITES}/v1/favourites/`,
  },
  ARTIST: `${API_URL}:${PORT_ARTIST}/v1/artists`,
  ALBUMS: `${API_URL}:${PORT_ALBUM}/v1/albums`,
  GENRES: `${API_URL}:${PORT_GENRE}/v1/genres`,
  TRACKS: `${API_URL}:${PORT_TRACK}/v1/tracks`,
  BANDS: `${API_URL}:${PORT_BAND}/v1/bands`,
};

export const METHOD: { GET: string; POST: string; PUT: string; DELETE: string } = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const HEADERS: { 'Content-Type': string } = { 'Content-Type': 'application/json' };
