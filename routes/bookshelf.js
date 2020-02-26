module.exports = function(app) {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: ' BookStore!',
    })
  );
  app.route('/bookshelf')
    .get((req, res) => {
      const id = req.query.id
      if (!id) {
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        res.status(200).send({
          user: "get bookshelf " + id
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
          user: 'post bookshelf' + id
        })
      }
    });
  app.route('/bookshelf/:id')
    .patch((req, res) => {
      const id = req.params.id
      if (!id) {
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        res.status(200).send({
          user: "patch bookshelf " + id
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
          user: "put bookshelf" + id
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
          user: "delete bookshelf" + id
        })
      }
    });
  app.route('/bookshelf')
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
      var bookshelfs = []
      var i;
      for (i = Number(offset); i < (Number(limit) + Number(offset)); i++) {
        bookshelfs.push("bookshelfs_" + i)
      }
      res.status(200).send({
        message: "books list with offse:" + offset + ", and limit:" + limit,
        book: bookshelfs
      })
    });
}
