import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMqQH6kngZQWFhb8KYS-W-wDOWP4OARa4",
  authDomain: "challenge-878a3.firebaseapp.com",
  databaseURL: "https://challenge-878a3.firebaseio.com",
  projectId: "challenge-878a3",
  storageBucket: "challenge-878a3.appspot.com",
  messagingSenderId: "759460034167",
  appId: "1:759460034167:web:ca35ed8eb130ad25037872",
  measurementId: "G-NR8NPNW2T6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};