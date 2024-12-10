// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5OX6mHJgyQRMLLG_fF4Se3Jong2fRQDk",
  authDomain: "multi-step-form-e3260.firebaseapp.com",
  databaseURL: "https://multi-step-form-e3260-default-rtdb.firebaseio.com",
  projectId: "multi-step-form-e3260",
  storageBucket: "multi-step-form-e3260.firebasestorage.app",
  messagingSenderId: "211503296111",
  appId: "1:211503296111:web:7bd27cbc329c6bdcf2a79a",
  measurementId: "G-5C3ZYLD0JJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);