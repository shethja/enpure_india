// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbihAyvXl9_TXh3tI_qnEq288KA8oEsak",
  authDomain: "enpure-india.firebaseapp.com",
  projectId: "enpure-india",
  storageBucket: "enpure-india.firebasestorage.app",
  messagingSenderId: "966600747547",
  appId: "1:966600747547:web:9caf222e0c1d9fc0b3a6be"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
