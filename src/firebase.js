import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwNcLBWAb5DnqUckSDt-JkoqKbT93DqcQ",
  authDomain: "portfolio-2bafb.firebaseapp.com",
  projectId: "portfolio-2bafb",
  storageBucket: "portfolio-2bafb.firebasestorage.app",
  messagingSenderId: "624965032457",
  appId: "1:624965032457:web:03929097663876a7f676d8",
  measurementId: "G-E4557X24B9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
