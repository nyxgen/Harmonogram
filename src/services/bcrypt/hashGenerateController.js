const bcrypt = require('bcrypt');

function run(password) {
    return new Promise((resolve, reject) => {
        const saltRounds = 8;
        bcrypt.hash(password, saltRounds)
            .then( hash =>
            {
                resolve(hash);
            })
            .catch( err =>{
                reject(err);
            });
    });
}


module.exports = {
    run
};