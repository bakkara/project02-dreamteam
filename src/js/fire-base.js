import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
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
const signUpBtnSwitchForm = document.querySelector('.signupbtn')
signUpBtnSwitchForm.addEventListener('click', switchForm)
const signUpBtnHeader = document.querySelector('.signup-header')
const userNameText = document.querySelector('.text-stephen')
const userNameTextMobile = document.querySelector('#text-stephen')
const closeFormBtn = document.querySelector('.js-form-close')
const formEl = document.querySelector('.form-wrapper');
const formElSignUp = document.querySelector('.form-wrapper-signup');
const navList = document.querySelector('.nav');
const signUpSvg = document.querySelector('.sign-up-svg')
const userDivHeader = document.querySelector('.div-stephen-header')

const btnLogOutList = document.querySelectorAll('.log-out')
const auth = getAuth();
const db = getFirestore(app)

signUpBtn.addEventListener('click', signUp)
signInBtn.addEventListener('click', signIn)
btnLogOutList.forEach(btnLogOut => {
  btnLogOut.addEventListener('click', logOut);
});
signUpBtnHeader.addEventListener('click', toggleForm)
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

function toggleForm(evt) {
  formEl.classList.toggle('is-hidden');
  if (!formEl.classList.contains('is-hidden')) {
    document.body.classList.toggle('no-scroll');
  }
}
function switchForm(){
  formElSignUp.classList.toggle('is-hidden');
}

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
