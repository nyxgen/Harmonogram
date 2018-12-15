var express = require('express');
var router = express.Router();
var expressControllers = require('./../src/services/express/index.js');

router.get('/create', async function(req, res, next) {
    res.status(201);
    res.send(await expressControllers.createProjectController(req.body))
});

module.exports = router;


