// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU5xsf0nf-p2GhM0eBcMmz7gVbz6s6jLI",
  authDomain: "loginforquraan.firebaseapp.com",
  projectId: "loginforquraan",
  storageBucket: "loginforquraan.appspot.com",
  messagingSenderId: "450221931096",
  appId: "1:450221931096:web:c5973a6818caec81aaa82d",
  measurementId: "G-PS5JNLN9V9"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};
