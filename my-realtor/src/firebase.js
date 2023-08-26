// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDibkJY-OUignV3aWTz2F3PFbwA0pgpZao",
  authDomain: "my-realtor-1efd1.firebaseapp.com",
  projectId: "my-realtor-1efd1",
  storageBucket: "my-realtor-1efd1.appspot.com",
  messagingSenderId: "1096006318680",
  appId: "1:1096006318680:web:12b8614d4d4f003723e82d",
  measurementId: "G-1RECH6L1SQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
