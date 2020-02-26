const users = require('./users');
const books = require('./book')

module.exports = function(app) {
  users(app)
  books(app)

  return app;
};
