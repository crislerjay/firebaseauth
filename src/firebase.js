// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7xf1m485Tf9BhXXBpe2_Dg_fPzvp--RE",
  authDomain: "fir-auth-3a6ea.firebaseapp.com",
  projectId: "fir-auth-3a6ea",
  storageBucket: "fir-auth-3a6ea.appspot.com",
  messagingSenderId: "937479416447",
  appId: "1:937479416447:web:9456f8f7df80877af22d4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;