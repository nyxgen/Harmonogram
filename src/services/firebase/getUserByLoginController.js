const db = require("./firebase.js");

function run(login) {
	return new Promise((resolve, reject) => {
		db.collection("Users").where("login", "==", login).get()
				   .then(snapshot => {
				   	var user;
				   	snapshot.forEach(doc => {
				   		user = doc;
				   	});
				   	if (user === undefined)
				   		reject(new Error("User not found"))
				   	else
				   		resolve(user);
				   });
	})
}

module.exports = {
	run
};