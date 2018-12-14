'use strict';
const db = require('./firebase.js');
const jwtControllers = require('./../jwt/index.js');

function run(data) {

    return new Promise((resolve, reject) => {
        jwtControllers.verify(data.token)
            .then(decoded => {
                if (decoded) {
                    return db.collection("Users").where("login", "==", decoded.login).get();
                }
                else
                    return {};
            })
            .then(snapshot => {
                var user;
                snapshot.forEach(doc => {
                    user = doc;
                });
                return user;
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
                reject("Can't do that");
            });
    });
}

module.exports = {
    run
}