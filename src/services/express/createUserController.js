'use strict';
const firebaseControllers = require('./../firebase/index.js');
const bcryptControllers = require('./../bcrypt/index.js');

function run(data) {
    return new Promise((resolve, reject) => {
        bcryptControllers.generateHash(data.password)
            .then(async hash => {
                return await firebaseControllers.createUser(data, hash);
            })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(new Error(err.message));
            });
    })
}

module.exports = {
    run
};