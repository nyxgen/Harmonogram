'use strict';

module.exports = {
    getAllCollectionsController: require("./getAllCollectionsController.js").run,
    getCollectionController: require("./getCollectionController.js").run,
    getDocumentController: require("./getDocumentController.js").run,
    getFieldValueController: require("./getFieldValueController.js").run,
    createUserController: require("./createUserController.js").run,
    loginController: require("./loginController.js").run,
    getUserDataController: require("./getUserDataController").run,
    changePasswordController: require("./changePasswordController").run
};