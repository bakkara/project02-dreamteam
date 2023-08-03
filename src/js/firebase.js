import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBZmcnC_2fBns-z8P5Wk9Fw_wxB6fZENSM",
  authDomain: "project02-dreamteam.firebaseapp.com",
  projectId: "project02-dreamteam",
  storageBucket: "project02-dreamteam.appspot.com",
  messagingSenderId: "730112308415",
  appId: "1:730112308415:web:8b4126c6ce805ba77a020a"
};

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

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
