const express = require('express');
const {
  sendAllCats,
  sendCatById,
  addNewCat
} = require('../controllers/cats.controllers');

const catsRouter = express.Router();

catsRouter
  .route('/')
  .get(sendAllCats)
  .post(addNewCat);

catsRouter.route('/:catId').get(sendCatById);

module.exports = catsRouter;
