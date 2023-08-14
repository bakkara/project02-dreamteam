import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { getFirestore, setDoc, doc } from "firebase/firestore"; 
import { openBurger } from "./header.js";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { elements } from "./refs.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZmcnC_2fBns-z8P5Wk9Fw_wxB6fZENSM",
  authDomain: "project02-dreamteam.firebaseapp.com",
  projectId: "project02-dreamteam",
  storageBucket: "project02-dreamteam.appspot.com",
  messagingSenderId: "730112308415",
  appId: "1:730112308415:web:8b4126c6ce805ba77a020a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app)


elements.formContainer.addEventListener('click', handleButtonClick);

function handleButtonClick(evt) {
  if (evt.target.classList.contains('signupbtn')) {
    elements.formElSignUp.classList.remove('is-hidden');
    elements.formElSignIn.classList.add('is-hidden');
  } else if (evt.target.classList.contains('signinbtn')) {
    elements.formElSignUp.classList.add('is-hidden');
    elements.formElSignIn.classList.remove('is-hidden');
  }

const signUpBtn = elements.formContainer.querySelector('.signupbtn');
  const signInBtn = elements.formContainer.querySelector('.signinbtn');
  
  elements.signUpBtn.classList.toggle('is-active', evt.target === signUpBtn);
  elements.signInBtn.classList.toggle('is-active', evt.target === signInBtn);

  document.body.classList.toggle('no-scroll', !elements.formElSignUp.classList.contains('is-hidden'));
}


elements.signUpBtn.addEventListener('click', signUp)
elements.signInBtn.addEventListener('click', signIn)
elements.btnLogOutList.forEach(btnLogOut => {
  btnLogOut.addEventListener('click', logOut);
});
elements.signUpBtnHeader.addEventListener('click', toggleForm)
elements.signUpBtnBurger.addEventListener('click', mobileFormOpen)
elements.closeFormBtn.addEventListener('click', toggleForm)

elements.signUpSvg.addEventListener('click', () => {
  elements.btnLogOutList.forEach(btnLogOut => {
      btnLogOut.classList.toggle('show');
  });
});

const userNameLocal = localStorage.getItem("userName");
if (userNameLocal) {
  elements.signUpBtnHeader.style.display = "none"
  elements.userNameText.textContent = localStorage.getItem("userName")
  elements.userDivHeader.style.display = "flex"
  elements.navList.style.display = "flex"
}

function mobileFormOpen() {
  openBurger();
  elements.formElSignIn.classList.toggle('is-hidden');
  if (!elements.formElSignIn.classList.contains('is-hidden')) {
    document.body.classList.toggle('no-scroll');
  }
}

function toggleForm(evt) {
  elements.formElSignIn.classList.toggle('is-hidden');
  if (!elements.formElSignIn.classList.contains('is-hidden')) {
    document.body.classList.toggle('no-scroll');
  }
}


async function signUp(evt) {
  
    try {
      const email = document.querySelector('#emailSignUp').value;
      const password = document.querySelector('#pswSignUp').value;
      const userName = document.querySelector('#userNameSignUp').value;
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
      elements.userNameText.textContent = userName;
      elements.userNameTextMobile.textContent = userName;
      elements.navList.style.display = "flex"
      window.location.replace('./index.html')
      } catch (error) {
        const errorMessage = error.message;
        Report.failure(
          `${errorMessage}`,
          '"Failure is simply the opportunity to begin again, this time more intelligently." <br/><br/>- Henry Ford',
          'Okey... Fix it',
          () => {
            location.reload();
          }
        );
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
      elements.userNameText.textContent = userName;
      elements.userNameTextMobile.textContent = userName;
      window.location.replace('./index.html')
      } catch (error) {
        const errorMessage = error.message;
        Report.failure(
          `${errorMessage}`,
          '"Failure is simply the opportunity to begin again, this time more intelligently." <br/><br/>- Henry Ford',
          'Okey... Fix it',
          () => {
            location.reload();
          }
        );
    }
}

async function logOut() {
  signOut(auth).then(() => {
  localStorage.removeItem("userName");
  elements.userDivHeader.classList.add('is-hidden')
  localStorage.removeItem("userUid");
  window.location.replace('./index.html');
  elements.navList.style.display = "none"
  elements.signUpBtnHeader.style.display = "flex"   
}).catch((err) => {
  console.log(err)
})
}
