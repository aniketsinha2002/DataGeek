import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';
const appdetails = {
    apiKey: "AIzaSyBR42W1oZG-KayL3tZJl8v482vXNHnWtso",
    authDomain: "datat-12645.firebaseapp.com",
    projectId: "datat-12645",
    storageBucket: "datat-12645.appspot.com",
    messagingSenderId: "500817474001",
    appId: "1:500817474001:web:e3586a7910d7be9d87f0f0"
  };

const app = initializeApp(appdetails);
const auth = getAuth(app);
const signup = document.querySelector('.signup-btn');
signup.addEventListener('click',(e)=>{
    // e.preventDefault();
    //getting email and passowrd
    const email = document.querySelector('.email1').value;
    const password = document.querySelector('.password1').value;
    console.log('function called')
    //calling method for signing up


   
   createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       alert('Signup successful')
       //add the page you want to load by uncommenting below
       // window.location.href = '/'
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         console.log(errorMessage)
         alert(errorMessage)
      });
})