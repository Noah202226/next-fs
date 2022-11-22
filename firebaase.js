// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6AedCE4iQPrGumQbZFs6cGXJ0b4m-LMM",
  authDomain: "assetmonitoring-ee584.firebaseapp.com",
  projectId: "assetmonitoring-ee584",
  storageBucket: "assetmonitoring-ee584.appspot.com",
  messagingSenderId: "165286884098",
  appId: "1:165286884098:web:3085b60cb0cc7ece03881b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const fs = getFirestore(app);
