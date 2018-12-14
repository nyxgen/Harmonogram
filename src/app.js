const express = require('express');
const app = express();

const expressControllers = require('./index.js').expressControllers;

var server = app.listen(1337, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listening at http://%s:%s", 'localhost', port);
});
console.log(server.address().address);


expressControllers.getAllCollectionsController(app, express);
expressControllers.getCollectionController(app, express);
expressControllers.getDocumentController(app, express);
expressControllers.createUserController(app, express);
expressControllers.changePasswordController(app, express);

