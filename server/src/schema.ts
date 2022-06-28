import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    getArtist: [Artist]
    getGenres: [Genre]
    getTracks: [Track]
    getBands: [Band]
    getAlbums: [Album]
    getJWT: String
    getUsers: [User]
    getFavourites: [Favourites]
  }

  type Mutation {
    createArtist(
      firstName: String!
      secondName: String!
      middleName: String
      birthDate: String
      birthPlace: String
      country: String
      bands: [String]
      instruments: [String]
    ): Artist
    deleteArtist(id: String): Artist
    updateArtist(id: String): Artist

    register(firstName: String!, lastName: String!, password: String!, email: String!): User
    login(email: String!, password: String!): Jwt
  }

  type Jwt {
    jwt: String!
  }

  type Track {
    id: ID!
    title: String
    albums: String
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type User {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    password: String!
    email: String!
  }

  type Album {
    id: ID
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type Favourites {
    id: ID!
    userId: ID!
    bands: [ID]
    genres: [ID]
    artists: [ID]
    tracks: [ID]
  }

  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: String
  }

  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: String
  }

  type Member {
    id: ID!
    artist: Artist
    instrument: String
    years: String
  }
`;
