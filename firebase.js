// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDs_NfMr2aXG3-i4Dq8OCEw39Gr8g5FMaA",
  authDomain: "react-notes-d8d42.firebaseapp.com",
  projectId: "react-notes-d8d42",
  storageBucket: "react-notes-d8d42.appspot.com",
  messagingSenderId: "1049847516372",
  appId: "1:1049847516372:web:4e57ce300a0935033a3f41"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")