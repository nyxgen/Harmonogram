var express = require('express');
var router = express.Router();
var expressControllers = require('./../src/services/express/index.js');

router.get('/create', async function(req, res, next) {
  res.status(201);
  res.send(await expressControllers.createUserController(req.body))
});

router.get('/changePassword', async function(req, res, next) {
  try {
    const response = await expressControllers.changePasswordController(req.body);
    res.send(response);
  }
  catch(err)
  {
    res.send(err.message);
  }
});

router.get('/login', async function(req, res, next) {
  try {
    const response = await expressControllers.loginController(req.body);
    res.send(response);
  }
  catch(err)
  {
    res.send(err.message);
  }
});

router.get('/data', async function(req, res, next) {
  res.send(await expressControllers.getUserDataController(req.body));
});




module.exports = router;
