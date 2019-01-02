const createError = require('http-errors');
const express = require('express');

const usersRouter = require('./routes/user');
const dataRouter = require('./routes/data');
const projectRouter = require('./routes/project');
const taskRouter = require('./routes/task');

const app = express();

app.use(express.json());
app.use (function (error, req, res, next){
    throw new Error("JSON error");
});

app.use('/data', dataRouter);
app.use('/user', usersRouter);
app.use('/project', projectRouter);
app.use('/task', taskRouter);

app.use(async function(req, res, next) {
    res.status(404);
    res.send("Wrong address");
  next();
});

app.use(async function(error, req, res, next) {
    res.status(415);
    res.send(error.message);
    next();
});

const server = app.listen(1337, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});

module.exports = app;
