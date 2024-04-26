import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbuCbpLBDKapBwbcYuX-fyJ4EKQCwbLsY",
  authDomain: "myportfolio-abf31.firebaseapp.com",
  projectId: "myportfolio-abf31",
  storageBucket: "myportfolio-abf31.appspot.com",
  messagingSenderId: "198736306126",
  appId: "1:198736306126:web:67802e04d497b69c0dd59f",
  measurementId: "G-QJBF3CVWRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
