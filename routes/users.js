const Users = require('../controllers/user');

module.exports = function(app) {
  app.get('/', (req, res) =>
    res.status(200).send({
      message: 'Welcome to the BookStore API!',
    })
  );

  app.route('/user')
    .get((req, res) => {
      //GET запрос. В GET запросах ми получаєм "id" із "req.query"
      //Приклад того, як повинен вказуватись "id":
      //http://127.0.0.1:3000/api/user?id=123
      const id = req.query.id

      //Якщо користувач не вказав "id", то ми йому відсилаємо помилку
      if (!id) {
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        //Якщо користувач вказав "id", то ми йому відсилаємо данні
        res.status(200).send({
          user: "get user " + id
        })
      }
    })
    .post((req, res) => {
      //POST запрос. В POST запросах ми получаєм "id" із "req.body"
      //Приклад того, як повинен вказуватись "id":
      //http://127.0.0.1:3000/api/user
      //
      //BODY:
      //  {
      //    "id": 12
      //  }

      //Якщо користувач не вказав "id", то ми йому відсилаємо помилку
      const id = req.body.id
      if (!id) {
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        //Якщо користувач вказав "id", то ми йому відсилаємо данні
        res.status(200).send({
          user: "post user " + id
        })
      }
    });

  app.route('/user/:id')
    .patch((req, res) => {
      //PATCH запрос. В PATCH запросах ми получаєм "id" із "req.params"
      //Приклад того, як повинен вказуватись "id":
      //http://127.0.0.1:3000/api/user/123
      const id = req.params.id
      if (!id) {
        //Якщо користувач не вказав "id", то ми йому відсилаємо помилку
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        //Якщо користувач вказав "id", то ми йому відсилаємо данні
        res.status(200).send({
          user: "patch user " + id
        })
      }
    })
    .put((req, res) => {
      //PUT запрос. В PUT запросах ми получаєм "id" із "req.params"
      //Приклад того, як повинен вказуватись "id":
      //http://127.0.0.1:3000/api/user/123
      const id = req.params.id
      if (!id) {
        //Якщо користувач не вказав "id", то ми йому відсилаємо помилку
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        //Якщо користувач вказав "id", то ми йому відсилаємо данні
        res.status(200).send({
          user: "put user " + id
        })
      }
    })
    .delete((req, res) => { //DELETE USER
      //DELETE запрос. В DELETE запросах ми получаєм "id" із "req.params"
      //Приклад того, як повинен вказуватись "id":
      //http://127.0.0.1:3000/api/user/123
      const id = req.params.id

      if (!id) {
        //Якщо користувач не вказав "id", то ми йому відсилаємо помилку
        res.status(400).send({
          error: 'id not found'
        })
      } else {
        res.status(200).send({
          user: "delete user " + id
        })
      }
    });

  app.route('/users')
    .get((req, res) => {
      //  GET запрос для списку. В таких GET запросах ми зазвичай вказуємо
      //query параметри "limit" і "offset"
      //  "limit" вказує, скільки обьєктів (в данному випадку - користувачів) ми хочемо отримати
      //  "offset" вказує, скільки ми відступимо позицій відносно першого елементу,
      //щоб отримати список.
      //  Тобто http://127.0.0.1:3000/api/users?limit=2&offset=2 буде означати
      //що ми хочемо отримати 2 користувача, починаючи з 3 (третього) користувача
      //Візуально це виглядає так:
      //////////////////////////////////
      // 0. User 0
      // 1. User 1
      // --> 2. User 2
      // --> 3. User 3
      // 4. User 4
      //////////////////////////////////

      //Така конструкція дозволяє отримати відразу декілька змінних,
      //в які ми відразу записуємо данні
      var {
        limit,
        offset
      } = req.query

      //У випадку, якщо користувач не вказав скільки він хоче об"єктів,
      //або кількість об"єктів менше одного,
      //то ми встановлюємо значення за замовчуванням. В данному випадку - 20 об"єктів
      //При бажанні ми можемо встановити будь яке інше число
      if (!limit || limit < 1) {
        limit = 20
      }

      //У випадку, якщо користувач не вказав починаючи якого об"єкту він хоче,
      //отримати список, або зміщення менше за нуль,
      //то ми встановлюємо значення за замовчуванням, яке ОБОВ"ЯЗКОВО повинне дорівнювати 0!
      if (!offset || offset < 0) {
        offset = 0
      }

      var users = []
      var i;
      for (i = Number(offset); i < (Number(limit) + Number(offset)); i++) {
        users.push("user_" + i)
      }

      res.status(200).send({
        message: "users list with offset: " + offset + ", and limit: " + limit,
        users: users
      })
    });

}
