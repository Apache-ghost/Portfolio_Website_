// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwq_yu7Rhjf5eVW0Cfyf8vYPIe174OIUI",
  authDomain: "fir-1-94d10.firebaseapp.com",
  projectId: "fir-1-94d10",
  storageBucket: "fir-1-94d10.appspot.com",
  messagingSenderId: "5441763809",
  appId: "1:5441763809:web:d89b141a055c029e52baa0",
  measurementId: "G-ZCK75QWHYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db=getFirestore(app);