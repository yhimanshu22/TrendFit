import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHhA3o08Nk4GScmhIKykyVAl5XSjJS2Uw",
  authDomain: "e-commerce-99426.firebaseapp.com",
  projectId: "e-commerce-99426",
  storageBucket: "e-commerce-99426.appspot.com",
  messagingSenderId: "337065238039",
  appId: "1:337065238039:web:eea59da09008569f6f4652"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
console.log(app.name ? "Firebase Mode Activated!" : "Firebase not working :(");
