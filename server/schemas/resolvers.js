const axios = require('axios');
// const fetch = require('node-fetch');
const { User, Project } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { githubUser }) => {
      return User.findOne({ githubUser });
    },
    allProjects: async () => {
      return Project.find();
    },
    projects: async (parent, { githubUser }) => {
      // return Project.find(params);
    },
    me: async (parent, args, context) => {
      return User.findOne({ _id: context.user._id });
    },
  },
};

module.exports = resolvers;
