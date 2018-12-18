const db = require("./firebase.js");

function run(login) {
	return new Promise((resolve, reject) => {
	 db.collection("Users").doc(login).get()
		 .then(user => {
			 resolve(user);
			 reject(new Error("User not found"))
		 })
		 .catch(err =>
		 {
			 reject(new Error("User not found"))
		 })
	})
}

module.exports = {
	run
};