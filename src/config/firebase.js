
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyBs8Ed6McxPT3JGSNXwHOWfUFyjPPP2C9Q",
    authDomain: "mp2-lms-project.firebaseapp.com",
    projectId: "mp2-lms-project",
    storageBucket: "mp2-lms-project.appspot.com",
    messagingSenderId: "433782005091",
    appId: "1:433782005091:web:e1784fd445a8e739ca0756",
    measurementId: "G-4XJHB7WD86"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

