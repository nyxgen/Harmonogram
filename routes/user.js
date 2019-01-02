var express = require('express');
var router = express.Router();
var expressControllers = require('./../src/services/express/index.js');

router.post('/create', async function(req, res, next) {
  try {
    const response = await expressControllers.createUserController(req.body);
    res.status(201);
    res.send(response);
  }
  catch(err) {
    res.status(404);
    res.render(err);
  }
});

router.get('/changePassword', async function(req, res, next) {
  try {
    const response = await expressControllers.changePasswordController(req.body);
    res.send(response);
  }
  catch(err) {
    res.send(err.message);
  }
});

// TODO: pozamieniać vary na consty
router.get('/login', async function(req, res, next) {
  try {
    const response = await expressControllers.loginController(req.body);
    res.send(response);
  }
  catch(err) {
    res.send(err.message);
  }
});

router.get('/data', async function(req, res, next) {
  try {
    const response = await expressControllers.getUserDataController(req.body);
    res.send(response);
  }
  catch(err) {
    res.send(err.message);
  }

});

module.exports = router;
