import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNC0gmPW80_VDsc6hmYDeFPhEMyxiO8dU",
    authDomain: "sih-blog-139d2.firebaseapp.com",
    projectId: "sih-blog-139d2",
    storageBucket: "sih-blog-139d2.appspot.com",
    messagingSenderId: "453200473350",
    appId: "1:453200473350:web:4022e3cce3bf3e0f73c287",
    measurementId: "G-JDEPT108EE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();