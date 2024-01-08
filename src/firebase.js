// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKeyieW0OUxE_SD1MORZaNuu56Ug5csto",
    authDomain: "authentication-67258.firebaseapp.com",
    projectId: "authentication-67258",
    storageBucket: "authentication-67258.appspot.com",
    messagingSenderId: "731631356266",
    appId: "1:731631356266:web:ba63637c8216d22ecdfd13",
    measurementId: "G-T9S9PRD6RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);