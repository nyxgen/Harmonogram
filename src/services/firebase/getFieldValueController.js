const db = require("./firebase.js");

function run(data) {
    return new Promise((resolve, reject) => {
        db.collection(data.collectionName).doc(data.documentName).get()
            .then(snapshot => {
                return (JSON.stringify(snapshot.get(data.fieldName), null, 2));
            })
            .then(response => {
                resolve(response);
            })
            .catch((err) => {
                reject(err.message);
            });
    })
}

module.exports = {
    run
};