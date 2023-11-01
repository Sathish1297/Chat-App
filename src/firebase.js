// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-30219.firebaseapp.com",
  projectId: "tutorial-30219",
  storageBucket: "tutorial-30219.appspot.com",
  messagingSenderId: "476672988694",
  appId: "1:476672988694:web:5975ec9edefbbbdde78737",
  measurementId: "G-4G92JTTEMH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();