import { gql } from 'apollo-server';

export const typeGenre = gql`
  type Query {
    getGenres(limit: Int, offset: Int): [Genre]
    getGenreById(id: String!): Genre
  }

  type Mutation {
    createGenre(name: String!, description: String, country: String, year: Int): Genre
    updateGenre(id: String!, name: String, description: String, country: String, year: Int): Genre
    deleteGenre(id: String!): Genre
  }
`;
