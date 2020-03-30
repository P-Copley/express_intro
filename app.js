const express = require('express');
const app = express();
const {
  sendAllCats,
  sendCatById,
  addNewCat
} = require('./controllers/cats.controllers');

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ msg: 'the api is up and running' });
});

app.get('/api/cats', sendAllCats);
app.post('/api/cats', addNewCat);
app.get('/api/cats/:catId', sendCatById);

app.listen(9090, err => {
  if (err) throw err;
  else console.log('Server Listening on port 9090...');
});
