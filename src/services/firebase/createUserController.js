'use strict';
const db = require("./firebase.js");
const bcrypt = require('bcrypt');

function run(data) {

    return new Promise((resolve, reject) => {
        const saltRounds = 8;
        bcrypt.hash(data.password, saltRounds)
            .then(hash => {
                db.collection("Users").doc(data.login).set(
                    {
                        name: data.name,
                        surname: data.surname,
                        password: hash,
                        login: data.login,
                        office: "",
                        permissionLevel: 0
                    });
            })
            .then(() => {
                resolve("User's created");
            })
            .catch(err => {
                reject(err.message);
            });   
    })
}

module.exports = {
    run
};
