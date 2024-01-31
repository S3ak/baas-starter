// do set up and initialisation
// use import.meta.env.VARIABLE_NAME to access env variables (Vite-specific)
// someValue = import.meta.env.VITE_SOME_VALUE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWl3qy_ExJHL0v3p9MAOY_A5kVD8uufzA",
  authDomain: "baas-starter-17a76.firebaseapp.com",
  projectId: "baas-starter-17a76",
  storageBucket: "baas-starter-17a76.appspot.com",
  messagingSenderId: "244430499991",
  appId: "1:244430499991:web:bf172853f1b672f890b9d2",
  measurementId: "G-YH2Y8R73BZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
