
'use strict';

function run(data) {
    return new Promise((resolve, reject) => {
            resolve ({login: data.login,});
    });
}


module.exports = {
    run
};