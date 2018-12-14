'use strict';
const db = require("./firebase.js");
const bcrypt = require('bcrypt');

function run(data) {

    return new Promise((resolve, reject) => {
        const saltRounds = 8;
        bcrypt.hash(data.password, saltRounds)
            .then(hash => {
                db.collection("Users").add(
                    {
                        name: data.name,
                        surname: data.surname,
                        password: hash,
                        login: data.login,
                        accepted: 0,
                        office: "",
                        permissionLevel: 0,
                        token: ""
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
