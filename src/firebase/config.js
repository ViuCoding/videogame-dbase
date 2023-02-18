// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SJ8R7D5H391cFJCsHgKS2rsU2r4mumM",
  authDomain: "gamerz-shack.firebaseapp.com",
  projectId: "gamerz-shack",
  storageBucket: "gamerz-shack.appspot.com",
  messagingSenderId: "439751100150",
  appId: "1:439751100150:web:e880d35756b05778f44ed7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth();

export { app, auth };
