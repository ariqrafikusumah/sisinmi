// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
<<<<<<< HEAD

    const firebaseConfig = {
    apiKey: "AIzaSyAEPWerp62CU1m5EfBj_q6nzCZhB8u7cBA",
    authDomain: "sisteminformasi-bb2af.firebaseapp.com",
    projectId: "sisteminformasi-bb2af",
    storageBucket: "sisteminformasi-bb2af.appspot.com",
    messagingSenderId: "3068837380",
    appId: "1:3068837380:web:73bb1cb8fce9d82d49ff51",
    measurementId: "G-H8NTQ33EBY"

=======
const firebaseConfig = {
  apiKey: "AIzaSyAEPWerp62CU1m5EfBj_q6nzCZhB8u7cBA",
  authDomain: "sisteminformasi-bb2af.firebaseapp.com",
  databaseURL: "https://sisteminformasi-bb2af-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sisteminformasi-bb2af",
  storageBucket: "sisteminformasi-bb2af.appspot.com",
  messagingSenderId: "3068837380",
  appId: "1:3068837380:web:73bb1cb8fce9d82d49ff51",
  measurementId: "G-H8NTQ33EBY"
>>>>>>> 681abbb1627b790876e37eab9994c3e44cdfe1f8
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);