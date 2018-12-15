'use strict';
const db = require("./firebase.js");

function run(data) {

    return new Promise((resolve, reject) => {
        db.collection("Tasks").doc(data.name).set(
            {
                name: data.name,
                description: data.description,
                users: [],
                status: ""
            })
            .then(() => {
                resolve("Task created");
            })
            .catch(err => {
                reject(err.message);
            });
    })
}

module.exports = {
    run
};
