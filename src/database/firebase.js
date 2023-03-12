// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEPWerp62CU1m5EfBj_q6nzCZhB8u7cBA",
  authDomain: "sisteminformasi-bb2af.firebaseapp.com",
  databaseURL:
    "https://sisteminformasi-bb2af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sisteminformasi-bb2af",
  storageBucket: "sisteminformasi-bb2af.appspot.com",
  messagingSenderId: "3068837380",
  appId: "1:3068837380:web:73bb1cb8fce9d82d49ff51",
  measurementId: "G-H8NTQ33EBY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
