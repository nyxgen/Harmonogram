'use strict';
const db = require("./firebase.js");

function run(data, hash) {
    return new Promise((resolve, reject) => {
        db.collection("Users").doc(data.login).set({
                name: data.name,
                surname: data.surname,
                password: hash,
                login: data.login,
                permissionLevel: 0
            })
            .then(() => {
                resolve("User's created");
            })
            .catch(err => {
                reject(new Error(err.message));
            });   
    })
}

module.exports = {
    run
};
