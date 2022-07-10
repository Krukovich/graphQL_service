import { Album, Artist, Band, Genre, ICustomError, IResponseFavourites, Track } from '../interfaces';
import { bandsQuery } from '../modules/bands';
import { genresQuery } from '../modules/genres';
import { artistQuery } from '../modules/artists';
import { tracksQuery } from '../modules/tracks';
import { albumsQuery } from '../modules/albums';
import { errorName, errorType } from '../error';
import { STATUS_CODE } from '../constatns';

export const checkParams = (limit: number, offset: number): boolean => {
  return limit >= 0 && offset >= 0;
};

export const insertQueryParamsInURL = ({
  url,
  limit,
  offset,
}: {
  url: string;
  limit: number;
  offset: number;
}): string => {
  return `${url}?limit=${limit}&offset=${offset}`;
};

export const getGenresWithOtherValues = (genresIds: string[]): Promise<Genre>[] => {
  return genresIds.map(async (id: string) => await genresQuery.getGenreById(null, { id: id }));
};

export const getBandsWithOtherValues = (bandsIds: string[]) => {
  return bandsIds.map(async (id: string) => {
    const bands: Band = await bandsQuery.getBandById(null, { id: id });

    return {
      ...bands,
      genres: bands.genresIds.length
        ? bands.genresIds
            .map(async (id: string) => await genresQuery.getGenreById(null, { id: id }))
            .filter((item: Promise<Genre>) => {
              return {
                ...item,
                genres: item.then((res: Genre) => genresQuery.getGenreById(null, { id: res.id })),
              };
            })
        : [],
    };
  });
};

export const getArtistWithOtherValues = (artistsIds: string[]) => {
  return artistsIds.map(async (id: string) => {
    const artist: Artist = await artistQuery.getArtistById(null, { id: id });

    return {
      ...artist,
      bands: artist.bandsIds.length ? getBandsWithOtherValues(artist.bandsIds) : [],
    };
  });
};

export const getAlbumWithOtherValues = async (albumId: string) => {
  const album: Album = await albumsQuery.getAlbumById(null, { id: albumId });

  return {
    ...album,
    artists: album.artistsIds.length ? getArtistWithOtherValues(album.artistsIds) : [],
    bands: album.bandsIds.length ? getBandsWithOtherValues(album.bandsIds) : [],
    tracks: album.trackIds.length ? getTracksWithOtherValues(album.trackIds) : [],
    genres: album.genresIds.length ? getGenresWithOtherValues(album.genresIds) : [],
  };
};

export const getTracksWithOtherValues = (trackIds: string[]): any => {
  return trackIds.map(async (id: string) => {
    const track: Track = await tracksQuery.getTrackById(null, { id: id });

    return {
      ...track,
      album: track.albumId ? await getAlbumWithOtherValues(track.albumId) : [],
      artists: track.artistsIds.length ? getArtistWithOtherValues(track.artistsIds) : [],
      bands: track.bandsIds.length ? getBandsWithOtherValues(track.bandsIds) : [],
      genres: track.genresIds.length ? getGenresWithOtherValues(track.genresIds) : [],
    };
  });
};

export const getFavouritesWithOtherValues = (response: IResponseFavourites) => {
  return {
    userId: response.userId,
    bands: response.bandsIds.length ? getBandsWithOtherValues(response.bandsIds) : [],
    genres: response.genresIds.length ? getGenresWithOtherValues(response.genresIds) : [],
    artists: response.artistsIds.length ? getArtistWithOtherValues(response.artistsIds) : [],
    tracks: response.tracksIds.length ? getTracksWithOtherValues(response.tracksIds) : [],
  };
};

export const getError = (errorName: string): ICustomError => {
  return errorType[errorName];
};

export const handleError = (statusCode: number): void => {
  switch (statusCode) {
    case STATUS_CODE.FORBIDDEN:
      throw new Error(errorName.UNAUTHORIZED);
    case STATUS_CODE.INTERNAL_SERVER_ERROR:
      throw new Error(errorName.INTERNAL_SERVER_ERROR);
    case STATUS_CODE.BAD_REQUEST:
      throw new Error(errorName.BAD_REQUEST);
    case STATUS_CODE.NOT_FOUND:
      throw new Error(errorName.NOT_FOUND);
    default:
      break;
  }
};
