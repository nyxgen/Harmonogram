'use strict';
const jwtControllers = require('./../jwt/index.js');
const firebaseControllers = require('./../firebase/index.js');
const bcryptControllers = require('./../bcrypt/index.js');

function run(data) {
    return new Promise((resolve, reject) => {
        jwtControllers.verify(data.token)
            .then(response => {
                if (!response) {
                    throw Error("Unauthorized request");
                }
                return response;
            })
            .then( async () => {
                return await firebaseControllers.getUserByLogin(data.login);
            })
            .then(async userDocument => {
                await bcryptControllers.compareHash(data.password, userDocument.data().password);
                return {
                    newHash: await  bcryptControllers.generateHash(data.newPassword),
                    user: userDocument
                };
            })
            .then(async response => {
                return await firebaseControllers.changePassword({
                    id: response.user.id,
                    newHash: response.newHash,
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