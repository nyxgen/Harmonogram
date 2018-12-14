'use strict';
const firebaseControllers = require('./../firebase/index.js');

function run() {
    return new Promise((resolve, reject) => {
        firebaseControllers.getAllCollections()
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err.message);
            });
    })
}


module.exports = {
    run
};