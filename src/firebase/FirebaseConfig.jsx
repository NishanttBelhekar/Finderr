import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 const firebaseConfig = {
   apiKey: "",
   authDomain: "",
   projectId: "",
   storageBucket: "",
   messagingSenderId: "",
   appId: "",
   measurementId: "",
 };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);