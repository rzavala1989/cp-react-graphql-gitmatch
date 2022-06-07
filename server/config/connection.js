const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://rzavala1989:illmatic774@cluster0.fzexrea.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  }
);

module.exports = mongoose.connection;
