const express = require('express');
const catsRouter = require('./cats.router');

const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
  res.status(200).send({ msg: 'api up and running ok' });
});

apiRouter.use('/cats', catsRouter);

module.exports = apiRouter;
