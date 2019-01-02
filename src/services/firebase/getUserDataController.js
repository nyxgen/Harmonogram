'use strict';
const db = require('./firebase.js');

function run(data, decoded) {
    return new Promise((resolve, reject) => {
        db.collection("Users").doc(decoded.login).get()
            .then(user => {
                const response = {
                    login: user.data().login,
                    name: user.data().name,
                    surname: user.data().surname,
                    accepted: user.data().accepted,
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