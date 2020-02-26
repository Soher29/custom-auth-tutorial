module.exports = function(app) {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: ' BookStore!',
    })
  );
  app.route('/book')
    .get((req, res) => {
      const id = req.query.id
      if (!id) {
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        res.status(200).send({
          user: "get book " + id
        })
      }
    })

    .post((req, res) => {
      const id = req.body.id
      if (!id) {
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        res.status(200).send({
          user: 'post book' + id
        })
      }
    });
  app.route('/book/:id')
    .patch((req, res) => {
      const id = req.params.id
      if (!id) {
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        res.status(200).send({
          user: "patch book " + id
        })
      }
    })
    .put((req, res) => {
      const id = req.params.id
      if (!id) {
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        res.status(200).send({
          user: "put book" + id
        })
      }
    })
    .delete((req, res) => {
      const id = req.params.id
      if (!id) {
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        res.status(200).send({
          user: "delete book" + id
        })
      }
    });
  app.route('/books')
    .get((req, res) => {
      var {
        limit,
        offset
      } = req.query
      if (!limit || limit < 1) {
        limit = 20
      }
      if (!offset || offset < 0) {
        offset = 0
      }
      var books = []
      var i;
      for (i = Number(offset); i < (Number(limit) + Number(offset)); i++) {
        books.push("book_" + i)
      }
      res.status(200).send({
        message: "books list with offse:" + offset + ", and limit:" + limit,
        book: books
      })
    });
}
