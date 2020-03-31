const express = require('express');
const apiRouter = require('./routes/api.router');
const { logger } = require('./controllers/logging.controllers');
const app = express();

app.use(express.json());
app.use(logger);

app.use('/api', apiRouter);

app.use((req, res, next) => {
  res.status(404).send({ msg: 'resource not found' });
});

app.listen(9090, err => {
  if (err) throw err;
  else console.log('Server Listening on port 9090...');
});
