'use strict';
const firebaseControllers = require('./../firebase/index.js');

function run(data) {
    return new Promise((resolve, reject) => {
        firebaseControllers.getCollection(data)
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