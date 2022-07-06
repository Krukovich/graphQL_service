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
    ): Album

    updateAlbum(
      id: String!
      name: String
      released: Int
      artistsIds: [String]
      bandsIds: [String]
      trackIds: [String]
      genresIds: [String]
    ): Album

    deleteAlbum(id: String!): Album
  }

  type Album {
    _id: ID
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }
`;
