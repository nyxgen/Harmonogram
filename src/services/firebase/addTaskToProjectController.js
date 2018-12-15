'use strict';
const db = require("./firebase.js");

function run(data) {

    return new Promise((resolve, reject) => {
        db.collection("Projects").doc(data.projectName).get()
            .then( async doc => {
                return await doc.data().tasks;
            })
            .then( async tasks => {
                tasks.push(data.name);
                return tasks;
            })
            .then(async tasks =>{
                console.log(tasks);
                await db.collection("Projects").doc(data.projectName).update(
                    {
                        tasks: tasks
                    }
                )
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
