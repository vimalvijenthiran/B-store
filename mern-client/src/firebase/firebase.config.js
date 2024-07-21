// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS_CsazB3VsGQgmFRFL8J0LHmPoaVKrvg",
  authDomain: "mern-book-inventory-91abd.firebaseapp.com",
  projectId: "mern-book-inventory-91abd",
  storageBucket: "mern-book-inventory-91abd.appspot.com",
  messagingSenderId: "408206118223",
  appId: "1:408206118223:web:a4b1654191be2263b0493a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;