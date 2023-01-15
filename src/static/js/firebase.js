// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOmpqvEw3GMTyJCxUcxj-_H6vC49OeKFQ",
  authDomain: "todolist-5b854.firebaseapp.com",
  projectId: "todolist-5b854",
  storageBucket: "todolist-5b854.appspot.com",
  messagingSenderId: "36920385300",
  appId: "1:36920385300:web:3ffe0c9cbbd7e40a436c01",
  measurementId: "G-S08RZ6MF3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{db}