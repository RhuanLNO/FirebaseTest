import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGbxxZwgQiERRVykHARPGUx2GZvwLBS0w",
  authDomain: "fir-test-c47d8.firebaseapp.com",
  projectId: "fir-test-c47d8",
  storageBucket: "fir-test-c47d8.appspot.com",
  messagingSenderId: "32728732587",
  appId: "1:32728732587:web:9dd8aad79cdf4283da38ee",
  measurementId: "G-KMJ46NGNP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
