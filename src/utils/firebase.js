// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj511gWBrTu2pCNmJsD9enzTg1kYPbTLg",
  authDomain: "nft-dashboard-892ff.firebaseapp.com",
  projectId: "nft-dashboard-892ff",
  storageBucket: "nft-dashboard-892ff.appspot.com",
  messagingSenderId: "579684508872",
  appId: "1:579684508872:web:3a2b20d72138bfe08431fd",
  measurementId: "G-21KMG8PM0J",
};

// Initialize Firebase
// const auth = getAuth();

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
