const { getAllCats, writeCat, getCatById } = require('../models/cats.models');

const sendAllCats = (req, res) => {
  getAllCats((err, cats) => {
    res.send({ cats });
  });
};

const sendCatById = (req, res) => {
  const { catId } = req.params;
  getCatById(catId, (err, cat) => {
    res.send({ cat });
  });
};

const addNewCat = (req, res) => {
  const newCat = req.body;
  writeCat(newCat, err => {
    res.status(201).send({ cat: newCat });
  });
};

module.exports = { sendAllCats, sendCatById, addNewCat };
