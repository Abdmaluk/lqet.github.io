import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDV3F9KWocJgi1R5t90vb002Gg_bKLQIxU",
  authDomain: "users-1e449.firebaseapp.com",
  databaseURL: "https://users-1e449-default-rtdb.firebaseio.com",
  projectId: "users-1e449",
  storageBucket: "users-1e449.appspot.com",
  messagingSenderId: "763748549016",
  appId: "1:763748549016:web:b1b27fe5cc2c24a5bfabed",
  measurementId: "G-KW39Y6NBVB"
  // Add your Firebase configuration here
};

initializeApp(firebaseConfig);

const auth = getAuth();
const database = getDatabase();

const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User registered:', user);

    const userDetails = {
      email: user.email,
      accountStatus: 'pending',
      // Add additional user details as needed
    };

    await set(ref(database, 'users/' + user.uid), userDetails);
    console.log('User details stored in the database');
    // You can redirect the user to a different page or perform additional actions here
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Registration error:', errorCode, errorMessage);
    // Display the error message to the user
    errorMessage.textContent = errorMessage;
  }
});
