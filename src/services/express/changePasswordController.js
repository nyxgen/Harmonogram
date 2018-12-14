'use strict';
const jwtControllers = require('./../jwt/index.js');
const firebaseControllers = require('./../firebase/index.js');

function run(data) {
    return new Promise((resolve, reject) => {
        jwtControllers.verify(data.token)
            .then(response => {
                if (!response) {
                    throw Error("Unauthorized request");
                }
                return response;
            })
            .then(response => {
                return firebaseControllers.changePassword({
                    login: response.login,
                    token: data.token,
                    password: data.password,
                    newPassword: data.newPassword
                });
            })
            .then(async () => {
                return await jwtControllers.preparePayload(data);
            })
            .then(payload => {
                return jwtControllers.sign(payload);
            })
            .then(response => {
                resolve(response);
            })
            .catch((err) => {
                reject(new Error(err.message));
            });
    });
}

module.exports = {
    run
};