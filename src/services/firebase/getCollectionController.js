const db = require("./firebase.js");

function run(data) {
    return new Promise((resolve, reject) => {
        console.log(data);
        console.log("Hi");
        db.collection(data.collectionName).get()
            .then(async snapshot => {
                var tab = [];
                snapshot.forEach(doc => {
                    tab.push(doc.id);
                });
                return (await JSON.stringify(tab, null, 2));
            })
            .then(response => {
                resolve(response);
            })
            .catch((err) => {
                reject(err.message);
            });
    });
}

module.exports = {
    run
}