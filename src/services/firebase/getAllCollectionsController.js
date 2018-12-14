'use strict';
const db = require("./firebase.js");

function run() {
    return new Promise((resolve, reject) => {
        db.getCollections()
            .then(snapshot => {
                var tab = [];
                snapshot.forEach(collection => {
                    tab.push(collection.id);
                });

                const resJSON = JSON.stringify(tab, null, 2);
                resolve(resJSON);
            })
            .catch((err) => {
                reject(new Error('Error getting documents'));
            });
    });
}

module.exports = {
    run
};