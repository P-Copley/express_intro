const { getAllCats, writeCats } = require('../models/cats.models');

const sendAllCats = (req, res) => {
  getAllCats((err, cats) => {
    res.send({ cats });
  });
};

const sendCatById = (req, res) => {
  const { catId } = req.params;
  getAllCats((err, cats) => {
    const cat = cats.find(cat => cat.id === catId);
    res.send({ cat });
  });
};

const addNewCat = (req, res) => {
  const newCat = req.body;
  getAllCats((err, cats) => {
    const newCats = [...cats, newCat];
    writeCats(newCats, err => {
      res.status(201).send({ cat: newCat });
    });
  });
};

module.exports = { sendAllCats, sendCatById, addNewCat };
