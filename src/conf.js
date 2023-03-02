// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBnXxtjftqqY3awRvLRZV2q3OMfyBIjKco",
  authDomain: "section-3a86e.firebaseapp.com",
  projectId: "section-3a86e",
  storageBucket: "section-3a86e.appspot.com",
  messagingSenderId: "104071441688",
  appId: "1:104071441688:web:eb6bae06c18cde5f7ec26d",
  measurementId: "G-1H5QZWCNC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}