const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);

  // En caso de tener varias versiones
  // const router2 = express.Router();
  // app.use('/api/v2', router2);
  // router2.use('/products', productsRouter);
}

module.exports = routerApi;
