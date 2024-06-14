// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJBylIzNFadtG4YiOO7MQtTeUdtt6iSlo",
  authDomain: "frist-db-firebase.firebaseapp.com",
  databaseURL: "https://frist-db-firebase-default-rtdb.firebaseio.com",
  projectId: "frist-db-firebase",
  storageBucket: "frist-db-firebase.appspot.com",
  messagingSenderId: "454284675414",
  appId: "1:454284675414:web:e1db832bf7f5ca7b816ef7",
  measurementId: "G-934QE99YZP"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider()

