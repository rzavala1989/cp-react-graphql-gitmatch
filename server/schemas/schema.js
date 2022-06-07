const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type User {
    _id: ID!
    githubUser: String!
    password: String!
    name: String!
    avatar: String
    url: String
    location: String
    created_at: String
    email: String!
    projects: [Project]
  }

  type Project {
    name: String!
    description: String
    repo_link: String
    language: [Language]
  }

  type Language {
    language: String
    count: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User!]
    user(githubUser: String!): User
    allProjects: [Project]
    projects(githubUser: String): [Project]
    me: User
  }

  `);
