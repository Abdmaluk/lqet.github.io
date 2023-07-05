var registrationForm = document.getElementById('registration-form');
var errorMessage = document.getElementById('error-message');

// Existing code for registration form submission handler
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  var emailInput = document.getElementById('email-input');
  var passwordInput = document.getElementById('password-input');

  var email = emailInput.value;
  var password = passwordInput.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      // Registration successful
      var user = userCredential.user;
      console.log('User registered:', user);

      // Store user details in the database
      var userDetails = {
        email: user.email,
        // Add additional user details as needed
      };

      database.ref('users/' + user.uid).set(userDetails)
        .then(function() {
          console.log('User details stored in the database');
          // You can redirect the user to a different page or perform additional actions here
        })
        .catch(function(error) {
          console.error('Error storing user details:', error);
          // Handle the error and display an appropriate message to the user
        });
    })
    .catch(function(error) {
      // Registration failed
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Registration error:', errorCode, errorMessage);
      // Display the error message to the user
      errorMessage.textContent = errorMessage;
    });
});


var firebaseConfig = {
  apiKey: "AIzaSyDV3F9KWocJgi1R5t90vb002Gg_bKLQIxU",
  authDomain: "users-1e449.firebaseapp.com",
  projectId: "users-1e449",
  storageBucket: "users-1e449.appspot.com",
  messagingSenderId: "763748549016",
  appId: "1:763748549016:web:b1b27fe5cc2c24a5bfabed",
  measurementId: "G-KW39Y6NBVB"
};

firebase.initializeApp(firebaseConfig);
