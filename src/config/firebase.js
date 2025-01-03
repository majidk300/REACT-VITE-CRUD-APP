// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA70Vdqy4jPsJF3yv3NybFnR61cbqO9jns",
  authDomain: "vite-contact-55686.firebaseapp.com",
  projectId: "vite-contact-55686",
  storageBucket: "vite-contact-55686.firebasestorage.app",
  messagingSenderId: "835947345307",
  appId: "1:835947345307:web:846d06a23ff9e17c9d1d3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);