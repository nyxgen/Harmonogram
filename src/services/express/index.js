'use strict';

module.exports = {
    getAllCollectionsController: require("./getAllCollectionsController").run,
    getCollectionController: require("./getCollectionController").run,
    getDocumentController: require("./getDocumentController").run,
    getFieldValueController: require("./getFieldValueController").run,
    createUserController: require("./createUserController").run,
    loginController: require("./loginController").run,
    getUserDataController: require("./getUserDataController").run,
    changePasswordController: require("./changePasswordController").run,
    createTaskController: require("./createTaskController").run,
    createProjectController: require("./createProjectController").run,
    addUserToTaskController: require("./addUserToTaskController").run,
};