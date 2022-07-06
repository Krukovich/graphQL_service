import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    getArtist(limit: Int, offset: Int): [Artist]
    getGenres(limit: Int, offset: Int): [Genre]
    getTracks(limit: Int, offset: Int): [Track]
    getBands(limit: Int, offset: Int): [Band]
    getAlbums(limit: Int, offset: Int): [Album]
    getFavourites: Favourites
    getUserById(id: String!): User
    getAlbumById(id: String!): Album
    getArtistById(id: String!): Artist
    getBandById(id: String!): Album
    getGenreById(id: String!): Genre
    getTrackById(id: String!): Track
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

    addTrackToFavourites(id: String!, type: String!): Favourites
    addBandToFavourites(id: String!, type: String!): Favourites
    addArtistToFavourites(id: String!, type: String!): Favourites
    addGenreToFavourites(id: String!, type: String!): Favourites

    deleteTrackFromFavourites(id: String!): Favourites
    deleteBandFromFavourites(id: String!): Favourites
    deleteArtistFromFavourites(id: String!): Favourites
    deleteGenreFromFavourites(id: String!): Favourites

    createGenre(name: String!, description: String, country: String, year: Int): Genre
    updateGenre(id: String!, name: String, description: String, country: String, year: Int): Genre
    deleteGenre(id: String!): Genre

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

    register(firstName: String!, lastName: String!, password: String!, email: String!): User
    login(email: String!, password: String!): Jwt
  }

  type Jwt {
    jwt: String!
  }

  type Track {
    _id: ID!
    title: String
    albumId: String
    bandsIds: [String]
    genresIds: [String]
    artistsIds: [String]
    duration: Int
    released: Int
  }

  type User {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    password: String!
    email: String!
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

  type Favourites {
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
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

  type Member {
    _id: ID!
    artist: String
    instrument: String
    years: String
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
