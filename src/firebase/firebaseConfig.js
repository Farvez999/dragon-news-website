// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh5UD1qcXBCpp3nRfMeQUv120DvrT8I30",
    authDomain: "dragon-news-website.firebaseapp.com",
    projectId: "dragon-news-website",
    storageBucket: "dragon-news-website.appspot.com",
    messagingSenderId: "214200237839",
    appId: "1:214200237839:web:70f6c8ced19170a60cc87a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;