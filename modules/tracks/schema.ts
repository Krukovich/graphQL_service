import { gql } from 'apollo-server';

export const typeTrack = gql`
  type Query {
    getTracks(limit: Int, offset: Int): [Track]
    getTrackById(id: String!): Track
  }

  type Mutation {
    createTrack(
      title: String!
      albumId: String
      bandsIds: [String]
      artistsIds: [String]
      duration: Int!
      released: Int!
      genresIds: [String!]
    ): Track

    updateTrack(
      id: String!
      title: String!
      albumId: String
      bandsIds: [String]
      artistsIds: [String]
      duration: Int!
      released: Int!
      genresIds: [String!]
    ): Track

    deleteTrack(id: String!): Track
  }

  type Track {
    _id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
`;
