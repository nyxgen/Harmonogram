'use strict';

const bcryptControllers = require('./../bcrypt/index.js');
const firebaseControllers = require('./../firebase/index.js');
const jwtControllers = require('./../jwt/index.js');

function run(data) {
    return new Promise((resolve, reject) => {
        firebaseControllers.getUserByLogin(data.login)
            .then((doc) => {
                return bcryptControllers.compareHash(data.password, doc.data().password);
            })
            .then(async () => {
                return await jwtControllers.preparePayload(data);
            })
            .then(payload => {
                return jwtControllers.sign(payload);
            })
            .then(token => {
                resolve(token);
                console.log("Resolve");
            })
            .catch(err => {
                reject(new Error(err.message));
            });
    });
}

module.exports = {
    run
};