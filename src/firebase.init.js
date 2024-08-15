// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeGWJMWX8y9qsmoPv3x5Ma7RmRs764aWk",
  authDomain: "drissho-news-dashboard.firebaseapp.com",
  projectId: "drissho-news-dashboard",
  storageBucket: "drissho-news-dashboard.appspot.com",
  messagingSenderId: "160041140403",
  appId: "1:160041140403:web:2c1f3a38db5d0d43b230c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;