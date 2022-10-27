// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID

    // apiKey: "AIzaSyC6x3kOYWDHj12a7IaJixaeNNKoYdRc4V0",
    // authDomain: "learning-platform-website.firebaseapp.com",
    // projectId: "learning-platform-website",
    // storageBucket: "learning-platform-website.appspot.com",
    // messagingSenderId: "451275045220",
    // appId: "1:451275045220:web:25796539378d1213e92271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;