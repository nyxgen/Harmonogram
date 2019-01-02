'use strict';
const db = require("./firebase.js");

function run(data) {
    return new Promise((resolve, reject) => {
        db.collection("Users").doc(data.id).update(
            {
                password: data.newHash// await  bcryptControllers.generateHash(data.newPassword)
            })
            .then(() => {
                resolve("Password changed");
            })
            .catch((err) => {
                reject(err);
            });
    });
}

module.exports = {
    run
};