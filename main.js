require.config({
  paths: {
    firebase: 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app',
    firebaseAuth: 'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth'
  }
});

require(['firebase', 'firebaseAuth'], function(firebase, firebaseAuth) {
  // Your Firebase SDK code goes here
  const auth = firebaseAuth.getAuth();

  // Add an event listener to the signup form
  const signupForm = document.getElementById('signup-form');
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the user's email and password from the form
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    // Create a new user with the email and password
    firebaseAuth.createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;
        console.log(`User created: ${user.email}`);
      })
      .catch((error) => {
        // Error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error creating user: ${errorCode} - ${errorMessage}`);
      });
  });
});
