var express = require('express');
var router = express.Router();
var expressControllers = require('./../src/services/express/index.js');

router.get('/', async function(req, res, next) {
    res.send(await expressControllers.getAllCollectionsController());
});

router.get('/:collectionName', async function(req, res, next) {
    res.send(await expressControllers.getCollectionController(req.params));
});

router.get('/:collectionName/:documentName', async function(req, res, next) {
    res.send(await expressControllers.getDocumentController(req.params));
});

router.get('/:collectionName/:documentName/:fieldName', async function (req, res, next) {
   res.send(await expressControllers.getFieldValueController(req.params));
});

module.exports = router;
