// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the sign-up form and the message div
const form = document.querySelector('#signup-form');
const message = document.querySelector('#message');

// Handle form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  // Create a new user with Firebase Authentication
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Display success message to the user
      message.innerHTML = 'Sign-up request submitted. Please wait for approval.';

      // Create a new document in Firestore for the new user
      const db = firebase.firestore();
      db.collection('users').doc(userCredential.user.uid).set({
        email: userCredential.user.email,
        status: 'pending'
      });
    })
    .catch((error) => {
      // Display error message to the user
      message.innerHTML = error.message;
    });
});
