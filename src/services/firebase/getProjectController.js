const db = require("./firebase.js");

function run(projectName) {
    return new Promise((resolve, reject) => {
        db.collection("Projects").doc(projectName).get()
            .then(response=> {
                resolve(response);
            })
            .catch((err) => {
                reject(err.message);
            });
    })
}
module.exports = {
    run
}