// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzUqnYAF2WigaAT3ZxCl4WprQIZLttSaM",
    authDomain: "recipe-remix-996dc.firebaseapp.com",
    databaseURL: "https://recipe-remix-996dc-default-rtdb.firebaseio.com/",
    projectId: "recipe-remix-996dc",
    storageBucket: "recipe-remix-996dc.appspot.com",
    messagingSenderId: "924797122457",
    appId: "1:924797122457:web:dd46d07d256093ad660508",
    measurementId: "G-LBW75XRFXG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app


