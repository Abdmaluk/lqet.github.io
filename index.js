const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.processSignUp = functions.auth.user().onCreate((user) => {
	// Set the user's account to "disabled"
	return admin
		.auth()
		.updateUser(user.uid, {
			disabled: true,
		})
		.then(() => {
			console.log("User account disabled.");
		})
		.catch((error) => {
			console.error(error);
		});
});
