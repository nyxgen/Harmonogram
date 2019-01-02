'use strict';
const firebaseControllers = require('./../firebase/index.js');
const jwtControllers = require('./../jwt/index.js');

function run(data) {
    return new Promise((resolve, reject) => {
        jwtControllers.verify(data.token)
            .then(async decoded => {
                if (decoded) {
                    return await firebaseControllers.getUserData(data, decoded);
                }
                else {
                    throw(new Error("Verification failed"));
                }
            })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(new Error(err.message));
            })
    })
}

module.exports = {
    run
};