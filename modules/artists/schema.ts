import { gql } from 'apollo-server';

export const typeArtist = gql`
  type Query {
    getArtist(limit: Int, offset: Int): [Artist]
    getArtistById(id: String!): Artist
  }

  type Mutation {
    createArtist(
      firstName: String!
      secondName: String!
      middleName: String
      birthDate: String
      birthPlace: String
      country: String!
      bandsIds: [String]
      instruments: [String]
    ): Artist

    updateArtist(
      id: String!
      firstName: String
      secondName: String
      middleName: String
      birthDate: String
      birthPlace: String
      country: String
      bandsIds: [String]
      instruments: [String]
    ): Artist

    deleteArtist(id: String!): Artist
  }

  type Artist {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Member {
    _id: ID!
    artist: String
    instrument: String
    years: String
  }
`;
