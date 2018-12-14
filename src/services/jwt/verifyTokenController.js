'use strict';
const jwt = require('jsonwebtoken');
var privateKey = "Hello there";
function run(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, privateKey, function (err, response) {
            if (err) reject(err);
            resolve(response)
        });
        jwt.verify(token, privateKey)
            .then(response => {
                if(response) {
                    resolve(response)
                }
                else {
                    reject(new Error(" is not correct"));
                }
            })
    });
}



module.exports = {
    run
};