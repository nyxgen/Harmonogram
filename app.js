const createError = require('http-errors');
const express = require('express');

const usersRouter = require('./routes/user');
const dataRouter = require('./routes/data');
const app = express();

app.use(express.json());

app.use('/data', dataRouter);
app.use('/users', usersRouter);


app.use(function(req, res, next) {
  next(createError(404));
});

const server = app.listen(1337, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

module.exports = app;
