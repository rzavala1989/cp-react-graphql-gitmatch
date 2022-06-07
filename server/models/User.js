const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  githubUser: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    //TODO: create a email validator
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  url: {
    type: String,
  },
  location: {
    type: String,
  },
  member_since: {
    type: String,
  },
  email: {
    type: String,
  },
  projects: [
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      repo_link: {
        type: String,
      },
      languages: [
        {
          language: {
            type: String,
          },
          count: {
            type: Number,
          },
        },
      ],
    },
  ],
});

//....middleware
//TODOS: create a pre-save middleware to create a password, compare incoming password to hashed password

const User = model('User', userSchema);

module.exports = User;
