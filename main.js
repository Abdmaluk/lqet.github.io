define('myModule', ['firebase', 'firebaseAuth'], function(firebase, firebaseAuth) {
  // Your Firebase SDK code goes here
  const firebaseConfig = {
  apiKey: "AIzaSyDV3F9KWocJgi1R5t90vb002Gg_bKLQIxU",
  authDomain: "users-1e449.firebaseapp.com",
  databaseURL: "https://users-1e449-default-rtdb.firebaseio.com",
  projectId: "users-1e449",
  storageBucket: "users-1e449.appspot.com",
  messagingSenderId: "763748549016",
  appId: "1:763748549016:web:b1b27fe5cc2c24a5bfabed",
  measurementId: "G-KW39Y6NBVB"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
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
