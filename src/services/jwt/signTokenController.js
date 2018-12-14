'use strict';
const jwt = require('jsonwebtoken');
var privateKey = "Hello there";
function run(payload) {
    return new Promise((resolve, reject) => {
        resolve(jwt.sign(payload, privateKey));
    });
}


module.exports = {
    run
};