// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB23yJoFNraaE2oG898dG0DglBFNsrkK48",
  authDomain: "recipe-remix-hci.firebaseapp.com",
  projectId: "recipe-remix-hci",
  storageBucket: "recipe-remix-hci.appspot.com",
  messagingSenderId: "708029963658",
  appId: "1:708029963658:web:5ae71269797fcdb2dcbc73",
  measurementId: "G-DS3RE1YDJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app

