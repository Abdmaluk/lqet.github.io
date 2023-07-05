// Initialize Firebase
firebase.initializeApp({
	apiKey: "<YOUR_API_KEY>",
	authDomain: "<YOUR_AUTH_DOMAIN>",
	projectId: "<YOUR_PROJECT_ID>",
});

// Get a reference to the Firebase authentication service
const auth = firebase.auth();

// Get a reference to the signup form
const signupForm = document.getElementById("signup-form");

// Add an event listener to the signup form
signupForm.addEventListener("submit", (event) => {
	// Prevent the default form submission behavior
	event.preventDefault();

	// Get the user's email and password from the form
	const email = signupForm.email.value;
	const password = signupForm.password.value;

	// Create the user account
	auth.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			// User account created successfully
			alert("Account created successfully. Please wait for approval.");
			// Redirect the user to the homepage
			window.location.href = "/";
		})
		.catch((error) => {
			// An error occurred while creating the user account
			alert(error.message);
		});
});
