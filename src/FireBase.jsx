import firebase from "firebase";
// Authentication
import "firebase/auth";
// firestore database
import "firebase/firestore";
// real time database
import "firebase/database";
// storage
import "firebase/storage";
// functions
import "firebase/functions";
// hosting

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj0ssn7YwgRbFC78T-SgRLyPCN9_Hyz64",
  authDomain: "food-delivery-app-3f4a9.firebaseapp.com",
  projectId: "food-delivery-app-3f4a9",
  storageBucket: "food-delivery-app-3f4a9.appspot.com",
  messagingSenderId: "1054854837323",
  appId: "1:1054854837323:web:698018a1cfd099402589ce",
  measurementId: "G-0N82QL0NY0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
