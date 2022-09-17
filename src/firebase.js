// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAjHxuC_T9UmOMBZek2t8yqG7ZlJEAf3o",
  authDomain: "testchat-9839c.firebaseapp.com",
  projectId: "testchat-9839c",
  storageBucket: "testchat-9839c.appspot.com",
  messagingSenderId: "565370179450",
  appId: "1:565370179450:web:9e2d1850924e0bf36c50c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);