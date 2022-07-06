import { gql } from 'apollo-server';

export const typeBand = gql`
  type Query {
    getBands(limit: Int, offset: Int): [Band]
    getBandById(id: String!): Album
  }

  type Mutation {
    createBand(name: String!, origin: String, members: [InputMember], website: String, genresIds: [String]): Band

    updateBand(
      id: String!
      name: String
      origin: String
      members: [InputMember]
      website: String
      genresIds: [String]
    ): Band

    deleteBand(id: String!): Band
  }

  input InputMember {
    _id: ID!
    artist: InputArtist
    instrument: String
    years: String
  }

  input InputArtist {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }
`;
