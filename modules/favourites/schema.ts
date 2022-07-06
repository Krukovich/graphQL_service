import { gql } from 'apollo-server';

export const typeFavourites = gql`
  type Query {
    getFavourites: Favourites
    getArtistById(id: String!): Artist
  }

  type Mutation {
    addTrackToFavourites(id: String!, type: String!): Favourites
    addBandToFavourites(id: String!, type: String!): Favourites
    addArtistToFavourites(id: String!, type: String!): Favourites
    addGenreToFavourites(id: String!, type: String!): Favourites
    deleteTrackFromFavourites(id: String!): Favourites
    deleteBandFromFavourites(id: String!): Favourites
    deleteArtistFromFavourites(id: String!): Favourites
    deleteGenreFromFavourites(id: String!): Favourites
  }

  type Favourites {
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }
`;
