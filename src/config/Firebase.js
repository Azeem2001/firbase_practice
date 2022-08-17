import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCQ_cGJNZbqMDgC-fqRg8jxp8VT30NP0ls",
  authDomain: "authntication-8d0d0.firebaseapp.com",
  projectId: "authntication-8d0d0",
  storageBucket: "authntication-8d0d0.appspot.com",
  messagingSenderId: "175013189191",
  appId: "1:175013189191:web:09bf9ca0c1a612f41bc362",
  measurementId: "G-15D5BTG18H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {
  auth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
