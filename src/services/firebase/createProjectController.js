'use strict';
const db = require("./firebase.js");

function run(data) {

    return new Promise((resolve, reject) => {
        db.collection("Projects").doc(data.name).set(
            {
                name: data.name,
                description: data.description,
                tasks: [],
                status: ""
            })
            .then(() => {
                resolve("Project created");
            })
            .catch(err => {
                reject(err.message);
            });
    })
}

module.exports = {
    run
};
