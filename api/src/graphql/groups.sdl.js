export const schema = gql`
  type Group {
    id: String!
    name: String!
    members: [User]!
    createdAt: DateTime!
  }

  type Query {
    groups: [Group!]!
  }

  input CreateGroupInput {
    name: String!
  }

  input UpdateGroupInput {
    name: String
  }

  type Mutation {
    createGroup(input: CreateGroupInput!): Group
  }
`
