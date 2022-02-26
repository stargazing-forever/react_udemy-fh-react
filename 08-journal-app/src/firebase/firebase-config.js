// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB80PagsyOCLxfCT6Esc5j_EtPSUK6zl3Y",
  authDomain: "journal-app-fernando-7d4d7.firebaseapp.com",
  projectId: "journal-app-fernando-7d4d7",
  storageBucket: "journal-app-fernando-7d4d7.appspot.com",
  messagingSenderId: "756573507268",
  appId: "1:756573507268:web:fadd3f4a5fc97c482d4391"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firestore
const db = firebase.firestore();
//para autenticacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}