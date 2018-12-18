'use strict';
const db = require('./firebase.js');
const jwtControllers = require('./../jwt/index.js');

function run(data) {

    return new Promise((resolve, reject) => {

        jwtControllers.verify(data.token)
            .then(decoded => {
                if (decoded) {
                    return db.collection("Users").doc(decoded.login).get();
                }
                else
                    throw(new Error("Verification failed"));
            })
            .then(user => {
                var response = {
                    login: user.data().login,
                    name: user.data().name,
                    surname: user.data().surname,
                    accepted: user.data().accepted,
                    office: user.data().office,
                    permissionLevel: user.data().permissionLevel
                };
                return response;
            })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(new Error(err.message));
            });
    });
}

module.exports = {
    run
}