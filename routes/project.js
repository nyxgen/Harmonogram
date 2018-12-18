var express = require('express');
var router = express.Router();
var expressControllers = require('./../src/services/express/index.js');

router.get('/create', async function(req, res, next) {
    try {
    const response = await expressControllers.createProjectController(req.body);
    res.status(201);
    res.send(response);
    }
    catch(err)
    {
        res.send(err.message);
    }
});

module.exports = router;


