'use strict';
const db = require("./firebase.js");
const bcryptControllers = require('./../bcrypt/index.js');
const getUserByLogin = require('./getUserByLoginController.js').run;

function run(data) {
    return new Promise((resolve, reject) => {
        getUserByLogin(data.login)
            .then(async userDocument => {
                return {
                        correctPassword: await bcryptControllers.compareHash(data.password, userDocument.data().password),
                        user: userDocument
                };
            })
            .then(async response => {
                db.collection("Users").doc(response.user.id).update(
                    {
                        password: await bcryptControllers.generateHash(data.newPassword)
                    });
            })  
            .then(() => {
                resolve(data.token);
            })
            .catch((err) => {
                reject(err);
            });

    });
}

module.exports = {
    run
};