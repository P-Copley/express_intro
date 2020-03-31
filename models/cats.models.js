const fs = require('fs');

const getAllCats = cb => {
  fs.readdir('data/cats', (err, files) => {
    const cats = [];
    files.forEach(file => {
      fs.readFile(`data/cats/${file}`, 'utf-8', (err, fileContents) => {
        if (err) console.log(err);
        else {
          const cat = JSON.parse(fileContents);
          cats.push(cat);
          if (cats.length === files.length) cb(null, cats);
        }
      });
    });
  });
};

const getCatById = (id, cb) => {
  fs.readFile(`data/cats/${id}.json`, 'utf-8', (err, fileContents) => {
    if (err) console.log(err);
    else {
      const cat = JSON.parse(fileContents);
      cb(null, cat);
    }
  });
};

const writeCat = (newCat, cb) => {
  fs.writeFile(
    `data/cats/${newCat.id}.json`,
    JSON.stringify(newCat, null, 2),
    err => {
      if (err) console.log(err);
      else {
        cb(null);
      }
    }
  );
};

module.exports = { getAllCats, writeCat, getCatById };
