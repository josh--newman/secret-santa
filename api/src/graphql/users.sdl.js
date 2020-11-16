export const schema = gql`
  type User {
    id: String!
    email: String!
    name: String!
    groups: [Group]!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    email: String!
    name: String!
  }

  input UpdateUserInput {
    email: String
    name: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`
