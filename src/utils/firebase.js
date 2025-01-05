// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjas6qHa_pRiMXGx3NtsCbDj-kqaf2oKU",
  authDomain: "gpt-netflix-fa35c.firebaseapp.com",
  projectId: "gpt-netflix-fa35c",
  storageBucket: "gpt-netflix-fa35c.firebasestorage.app",
  messagingSenderId: "800021309099",
  appId: "1:800021309099:web:5177130643fdd9612fb9ee",
  measurementId: "G-34P18H056V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);