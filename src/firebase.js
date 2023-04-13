// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxPAJn4BKbVOGR-my-WCxIF6OKAmm6te4",
  authDomain: "test-8392f.firebaseapp.com",
  projectId: "test-8392f",
  storageBucket: "test-8392f.appspot.com",
  messagingSenderId: "244010607945",
  appId: "1:244010607945:web:27dd86c25571f25a6aa698",
  measurementId: "G-TTVLRZ95EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app

