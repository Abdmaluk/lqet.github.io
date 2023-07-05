// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDV3F9KWocJgi1R5t90vb002Gg_bKLQIxU",
  authDomain: "users-1e449.firebaseapp.com",
  databaseURL: "https://users-1e449-default-rtdb.firebaseio.com",
  projectId: "users-1e449",
  storageBucket: "users-1e449.appspot.com",
  messagingSenderId: "763748549016",
  appId: "1:763748549016:web:b1b27fe5cc2c24a5bfabed",
  measurementId: "G-KW39Y6NBVB",
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
