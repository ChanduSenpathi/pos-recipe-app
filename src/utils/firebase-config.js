
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAkTZwt9NrhlrxwxCC5WaXHGaRIBF3VJnA",
  authDomain: "pos-recipe-app.firebaseapp.com",
  projectId: "pos-recipe-app",
  storageBucket: "pos-recipe-app.appspot.com",
  messagingSenderId: "581611301890",
  appId: "1:581611301890:web:b2cbe18e061fe1f6694b1b",
  measurementId: "G-7GRHNMMSH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);


if (process.env.NODE_ENV === 'development') {
  firebaseAuth.settings.appVerificationDisabledForTesting = true;
}
