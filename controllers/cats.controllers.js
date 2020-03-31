const { getAllCats, writeCat, getCatById } = require('../models/cats.models');

const sendAllCats = (req, res, next) => {
  getAllCats((err, cats) => {
    res.send({ cats });
  });
};

const sendCatById = (req, res, next) => {
  const { catId } = req.params;
  getCatById(catId, (err, cat) => {
    if (err) next({ status: 404, msg: 'kitty not found' });
    else res.send({ cat });
  });
};

const addNewCat = (req, res, next) => {
  const newCat = req.body;
  writeCat(newCat, err => {
    res.status(201).send({ cat: newCat });
  });
};

module.exports = { sendAllCats, sendCatById, addNewCat };
