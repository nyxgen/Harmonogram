'use strict';
const firebaseControllers = require('./../firebase/index.js');
const jwtControllers = require('./../jwt/index.js');

function run(data) {
    return new Promise((resolve, reject) => {
        jwtControllers.verify(data.token)
            .then(async userData=> {
                return await firebaseControllers.getUserByLogin(userData.login);
            })
            .then(user =>{
                if(user.data().permissionLevel <= 500)
                    throw new Error("Permission level is too low");
                return {};
            })
            .then(async ()=>
            {
               return await firebaseControllers.addTaskToProject(data);
            })
            .then(async response => {
               return await firebaseControllers.createTask(data);
            })
            .then((response)=>{
                resolve(response)
            })
            .catch(err => {
                reject(new Error(err.message));
            });
    })
}

module.exports = {
    run
};