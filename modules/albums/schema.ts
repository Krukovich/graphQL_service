import { gql } from 'apollo-server';

export const typeAlbum = gql`
  type Query {
    getAlbums(limit: Int, offset: Int): [Album]
    getAlbumById(id: String!): Album
  }

  type Mutation {
    createAlbum(
      name: String!
      released: Int
      artistsIds: [String]
      bandsIds: [String]
      trackIds: [String]
      genresIds: [String]
      image: String
    ): Album

    updateAlbum(
      id: String!
      name: String
      released: Int
      artistsIds: [String]
      bandsIds: [String]
      trackIds: [String]
      genresIds: [String]
      image: String
    ): Album

    deleteAlbum(id: String!): Album
  }

  type Album {
    _id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
`;
