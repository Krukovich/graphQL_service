import { gql } from 'apollo-server';

export const typeUser = gql`
  type Query {
    getUserById(id: String!): User
    login(email: String!, password: String!): Jwt
  }

  type Mutation {
    register(firstName: String!, lastName: String!, password: String!, email: String!): User
  }

  type Jwt {
    jwt: String!
  }

  type User {
    _id: ID!
    firstName: String
    password: String!
    email: String!
  }
`;
