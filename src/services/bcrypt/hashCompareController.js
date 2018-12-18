const bcrypt = require('bcrypt');

function run(password, hash) {
    return new Promise((resolve, reject) => {

        bcrypt.compare(password, hash)
            .then(response => {
                if(response) {
                    resolve(response)
                }
                else {
                    reject(new Error("Password is not correct"));
                }
            })
            .catch(err =>{
                reject(new Error("Bad arguments"));
            })
    });
}


module.exports = {
    run
};