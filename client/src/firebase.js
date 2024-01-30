// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-9e7fa.firebaseapp.com",
  projectId: "mern-auth-9e7fa",
  storageBucket: "mern-auth-9e7fa.appspot.com",
  messagingSenderId: "722309868977",
  appId: "1:722309868977:web:583ab65d357739c6ede190"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);