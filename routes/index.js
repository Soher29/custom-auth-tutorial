const users = require('./users');
const books = require('./book')
const boolshelf = require('./bookshelf');

module.exports = function(app) {
  users(app)
  books(app)
  bookshelf(app)

  return app;
};
