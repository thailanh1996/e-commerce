// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBiiFkUKT8Mye5I502_cuGBrNi_YJIcWMs",
  authDomain: "e-commerce-979bb.firebaseapp.com",
  projectId: "e-commerce-979bb",
  storageBucket: "e-commerce-979bb.appspot.com",
  messagingSenderId: "1015016878137",
  appId: "1:1015016878137:web:04c80927ee69b958485de8",
  measurementId: "G-DJ00VETKCJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
