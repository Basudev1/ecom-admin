// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXPemjCMII4h3K7jLPb4o53CK8IyMqmIo",
  authDomain: "andro-48125.firebaseapp.com",
  databaseURL:
    "https://andro-48125-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "andro-48125",
  storageBucket: "andro-48125.appspot.com",
  messagingSenderId: "200316390054",
  appId: "1:200316390054:web:1bc4154687b0fb4b7f4267",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
