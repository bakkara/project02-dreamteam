import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { getFirestore, setDoc, doc } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyBZmcnC_2fBns-z8P5Wk9Fw_wxB6fZENSM",
  authDomain: "project02-dreamteam.firebaseapp.com",
  projectId: "project02-dreamteam",
  storageBucket: "project02-dreamteam.appspot.com",
  messagingSenderId: "730112308415",
  appId: "1:730112308415:web:8b4126c6ce805ba77a020a"
};

const app = initializeApp(firebaseConfig);
const signUpBtn = document.querySelector('#signup')
const signInBtn = document.querySelector('#signin')
const auth = getAuth();
const db = getFirestore(app)


signUpBtn.addEventListener('click', signUp)
signInBtn.addEventListener('click', signIn)

async function signUp(evt) {
  
    try {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#psw').value;
      const userName = document.querySelector('#userName').value;
      const userAuth = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userAuth.user.uid
      const userObj = {
        userName,
        email,  
        accountActivate: true,
        uid
      }
      console.log("authObj", userObj)
      const userRef = doc(db, "users", userAuth.uid,);
      const userDB = await setDoc(userRef, userObj);
      console.log("authObj", userDB);
      window.location.replace('/')
      } catch (error) {
        const errorMessage = error.message;
        alert(errorMessage)
    }
 
}

async function signIn(evt) {
  
    try {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#psw').value;
      const userName = document.querySelector('#userName').value;
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("userUid", userLogin.user.uid)
      localStorage.setItem("userName", userName)
      window.location.replace('/index')
      } catch (error) {
        const errorMessage = error.message;
        alert(errorMessage)
    }
 
}
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });