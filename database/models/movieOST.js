const mongoose = require('mongoose');

const movieOstSchema = mongoose.Schema({
  username: String,
  password: String,
  lastMovieSearched: String
});

const movieOst = mongoose.model('movieOst', movieOstSchema);

module.exports = movieOst;