// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyS-MhtmEvFbH4NvO5pFK4CmgP34Y9vlA",
  authDomain: "sattacompany-947aa.firebaseapp.com",
  projectId: "sattacompany-947aa",
  storageBucket: "sattacompany-947aa.appspot.com",
  messagingSenderId: "789216792814",
  appId: "1:789216792814:web:7acee0a603db524ad9e3ff",
  measurementId: "G-B9EQ44NNJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth} 