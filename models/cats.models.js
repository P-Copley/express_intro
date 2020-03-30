const fs = require('fs');

const getAllCats = cb => {
  fs.readFile('data/cats.json', 'utf-8', (err, fileContents) => {
    if (err) console.log(err);
    else {
      const cats = JSON.parse(fileContents);
      cb(null, cats);
    }
  });
};

const writeCats = (newCats, cb) => {
  fs.writeFile('data/cats.json', JSON.stringify(newCats, null, 2), err => {
    if (err) console.log(err);
    else {
      cb(null);
    }
  });
};

module.exports = { getAllCats, writeCats };
