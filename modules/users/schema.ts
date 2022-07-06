import { gql } from 'apollo-server';

export const typeUser = gql`
  type Query {
    getUserById(id: String!): User
  }

  type Mutation {
    register(firstName: String!, lastName: String!, password: String!, email: String!): User
    login(email: String!, password: String!): Jwt
  }

  type Jwt {
    jwt: String!
  }

  type User {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    password: String!
    email: String!
  }
`;
