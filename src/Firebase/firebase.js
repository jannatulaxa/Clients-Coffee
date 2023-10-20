// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB9QNTS2Fn9q9lZBC_mIO41PgWxXK521E",
  authDomain: "my-cafe-house.firebaseapp.com",
  projectId: "my-cafe-house",
  storageBucket: "my-cafe-house.appspot.com",
  messagingSenderId: "262466964807",
  appId: "1:262466964807:web:4702a726b013a199921062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;


