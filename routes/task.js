var express = require('express');
var router = express.Router();
var expressControllers = require('./../src/services/express/index.js');

router.get('/create', async function(req, res, next) {
    res.status(201);
    res.send(await expressControllers.createTaskController(req.body))
});

router.get('/addUser', async function(req, res, next) {
    res.status(201);
    res.send(await expressControllers.addUserToTaskController(req.body))
});


module.exports = router;
