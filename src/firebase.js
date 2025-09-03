// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration from Step 1
const firebaseConfig = {
  apiKey: "AIzaSyBViQ0d187A8yXAN9fRVyPvCmRlF3d2zpw",
  authDomain: "lift-up-1805.firebaseapp.com",
  projectId: "lift-up-1805",
  storageBucket: "lift-up-1805.firebasestorage.app",
  messagingSenderId: "1:441640040684:web:7427cce73d9c7ebe9f4dc9",
  appId: "G-0DZY179M07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
