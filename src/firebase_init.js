// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBezl9tlrjZN0rtCjtH9HXNEbgCA01htKg",
    authDomain: "onlineprograming-95b60.firebaseapp.com",
    projectId: "onlineprograming-95b60",
    storageBucket: "onlineprograming-95b60.appspot.com",
    messagingSenderId: "863118381563",
    appId: "1:863118381563:web:beba41f4123f3f0229bb5e",
    measurementId: "G-7LMH9XTGBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;