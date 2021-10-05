import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIuOuikwMUBqGkQtAAw1K1Odd-pjWdTgQ",
    authDomain: "facebook-clone-b4401.firebaseapp.com",
    projectId: "facebook-clone-b4401",
    storageBucket: "facebook-clone-b4401.appspot.com",
    messagingSenderId: "459313964284",
    appId: "1:459313964284:web:4f14a88f72da949e35e379"
  };


// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage;

export {db, storage};

