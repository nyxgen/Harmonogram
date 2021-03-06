'use strict';

module.exports = {
    getUserByLogin: require("./getUserByLoginController.js").run,
    getAllCollections: require("./getAllCollectionsController.js").run,
    getCollection: require("./getCollectionController.js").run,
    getDocument: require("./getDocumentController.js").run,
    getFieldValue: require("./getFieldValueController.js").run,
    createUser: require("./createUserController.js").run,
    getUserData: require("./getUserDataController.js").run,
    changePassword: require("./changePasswordController.js").run,
    createProject: require("./createProjectController.js").run,
    createTask: require("./createTaskController.js").run,
    addTaskToProject: require("./addTaskToProjectController.js").run,
    addUserToTask: require("./addUserToTaskController.js").run,
    getProject: require("./getProjectController.js").run
};