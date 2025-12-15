// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, connectAuthEmulator} from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS1XGNj2IALs1Gu6nfwbwG5EzVDd9-tas",
  authDomain: "truthguard-415e6.firebaseapp.com",
  projectId: "truthguard-415e6",
  storageBucket: "truthguard-415e6.firebasestorage.app",
  messagingSenderId: "11350332056",
  appId: "1:11350332056:web:021e895fc217a1b60536ed",
  measurementId: "G-YT2LMLNPPG"
};
//
// // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Connect to Auth Emulator in development environment
connectAuthEmulator(auth, "http://127.0.0.1:9099");