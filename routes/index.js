const users = require('./users');
const books = require('./book')
const bookshelfs = require('./bookshelf')

module.exports = function(app) {
  users(app),
  books(app),
  bookshelfs(app)

  return app;
};
