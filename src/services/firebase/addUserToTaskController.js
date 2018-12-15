'use strict';
const db = require("./firebase.js");

function run(data) {

    return new Promise((resolve, reject) => {
        db.collection("Tasks").doc(data.taskName).get()
            .then( async doc => {
                return await doc.data().users;
            })
            .then( async users => {
                users.push(data.userName);
                return users;
            })
            .then(async users =>{
                await db.collection("Tasks").doc(data.taskName).update(
                    {
                        users: users
                    }
                )
            })
            .then(() => {
                resolve("User added");
            })
            .catch(err => {
                reject(err.message);
            });
    })
}

module.exports = {
    run
};
