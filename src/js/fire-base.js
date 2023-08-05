import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBZmcnC_2fBns-z8P5Wk9Fw_wxB6fZENSM",
  authDomain: "project02-dreamteam.firebaseapp.com",
  projectId: "project02-dreamteam",
  storageBucket: "project02-dreamteam.appspot.com",
  messagingSenderId: "730112308415",
  appId: "1:730112308415:web:8b4126c6ce805ba77a020a"
};

const app = initializeApp(firebaseConfig);
const submit = document.querySelector('#submitData')
const auth = getAuth();


submit.addEventListener('click', signUp)

function signUp(evt) {
    try {
        const email = document.querySelector('#email').value;
    const password = document.querySelector('#psw').value;
        const userName = document.querySelector('#userName').value;
    } catch (error) {
        const errorMessage = error.message;
        alert(errorMessage)
    }
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
      const user = userCredential.user;
      alert('user created')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    // ..
  });
}

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });