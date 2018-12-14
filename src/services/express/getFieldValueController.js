'use strict';
const firebaseControllers = require('./../firebase/index.js');
function run(params) {
    return new Promise((resolve, reject) => {
        firebaseControllers.getFieldValue(params)
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