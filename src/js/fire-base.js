import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { getFirestore, setDoc, doc } from "firebase/firestore"; 
import { openBurger } from "./header";

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
// const signUpBtnSwitchForm = document.querySelector('.signupbtn')
// const signInBtnSwitchForm = document.querySelector('.signinbtn')
// signUpBtnSwitchForm.addEventListener('click', switchForm)
// signInBtnSwitchForm.addEventListener('click', switchForm)

const signUpBtnHeader = document.querySelector('.signup-header')
const signUpBtnBurger = document.querySelector('.signup-burger')
const userNameText = document.querySelector('.text-stephen')
const userNameTextMobile = document.querySelector('#text-stephen')
const closeFormBtn = document.querySelector('.js-form-close')
const formElSignIn = document.querySelector('.form-wrapper');
const formElSignUp = document.querySelector('.form-wrapper-signup');
const navList = document.querySelector('.nav');
const signUpSvg = document.querySelector('.sign-up-svg')
const userDivHeader = document.querySelector('.div-stephen-header')
const mobileMenuSignUP = document.querySelector('.mobile-wrapper-signup');
const btnLogOutList = document.querySelectorAll('.log-out')
const auth = getAuth();
const db = getFirestore(app)
const formContainer = document.querySelector('.form-container');
formContainer.addEventListener('click', handleButtonClick);

function handleButtonClick(evt) {
  if (evt.target.classList.contains('signupbtn')) {
    formElSignUp.classList.remove('is-hidden');
    formElSignIn.classList.add('is-hidden');
  } else if (evt.target.classList.contains('signinbtn')) {
    formElSignUp.classList.add('is-hidden');
    formElSignIn.classList.remove('is-hidden');
  }

  const signUpBtn = formContainer.querySelector('.signupbtn');
  const signInBtn = formContainer.querySelector('.signinbtn');

  signUpBtn.classList.toggle('is-active', evt.target === signUpBtn);
  signInBtn.classList.toggle('is-active', evt.target === signInBtn);

  document.body.classList.toggle('no-scroll', !formElSignUp.classList.contains('is-hidden'));
}

signUpBtn.addEventListener('click', signUp)
signInBtn.addEventListener('click', signIn)
btnLogOutList.forEach(btnLogOut => {
  btnLogOut.addEventListener('click', logOut);
});
signUpBtnHeader.addEventListener('click', toggleForm)
signUpBtnBurger.addEventListener('click', mobileFormOpen)
closeFormBtn.addEventListener('click', toggleForm)

signUpSvg.addEventListener('click', () => {
  btnLogOutList.forEach(btnLogOut => {
      btnLogOut.classList.toggle('show');
  });
});

const userNameLocal = localStorage.getItem("userName");
if (userNameLocal) {
  signUpBtnHeader.style.display = "none"
  userNameText.textContent = localStorage.getItem("userName")
  userDivHeader.style.display = "flex"
  navList.style.display = "flex"
} 
function mobileFormOpen() {
  openBurger();
  formElSignIn.classList.toggle('is-hidden');
  if (!formElSignIn.classList.contains('is-hidden')) {
    document.body.classList.toggle('no-scroll');
  }
}

function toggleForm(evt) {
  formElSignIn.classList.toggle('is-hidden');
  if (!formElSignIn.classList.contains('is-hidden')) {
    document.body.classList.toggle('no-scroll');
  }
}

// function switchForm(){
//   formElSignUp.classList.toggle('is-hidden');
//   signUpBtnSwitchForm.classList.toggle('is-active')
//   if (!formElSignUp.classList.contains('is-hidden')) {
//     document.body.classList.toggle('no-scroll');
//   }
// }

async function signUp(evt) {
  
    try {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#psw').value;
      const userName = document.querySelector('#userName').value;
      const userAuth = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userAuth.user.uid
      // const userObj = {
      //   userName,
      //   email,  
      //   accountActivate: true,
      //   uid
      // }
      // console.log("authObj", userObj)
      // const userRef = doc(db, "users", userAuth.uid,);
      // const userDB = await setDoc(userRef, userObj);
      // console.log("authObj", userDB);
      localStorage.setItem("userUid", uid)
      localStorage.setItem("userName", userName)
      userNameText.textContent = userName;
      userNameTextMobile.textContent = userName;
      navList.style.display = "flex"
      window.location.replace('./index.html')
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
      userNameText.textContent = userName;
      userNameTextMobile.textContent = userName;
      window.location.replace('./index.html')
      } catch (error) {
        const errorMessage = error.message;
        alert(errorMessage)
    }
}

async function logOut() {
    signOut(auth).then(() => {
    console.log('Log out');
    localStorage.removeItem("userName");
     userDivHeader.classList.add('is-hidden')
    localStorage.removeItem("userUid");
    window.location.replace('./index.html');
     navList.style.display = "none"
    signUpBtnHeader.style.display = "flex"   
  }).catch((err) => {
    console.log(err)
  })
}
