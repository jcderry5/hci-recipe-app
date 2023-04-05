// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdIVhFmrOXCE4hWpPOSSQPlZdyPgAIC08",
  authDomain: "hci-recipe-app.firebaseapp.com",
  databaseURL: "https://hci-recipe-app-default-rtdb.firebaseio.com",
  projectId: "hci-recipe-app",
  storageBucket: "hci-recipe-app.appspot.com",
  messagingSenderId: "768535032250",
  appId: "1:768535032250:web:9ce639cd6d647b8d202d83",
  measurementId: "G-ZPXR0DB98S"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app

