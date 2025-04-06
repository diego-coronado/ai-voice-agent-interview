// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDqP6SMisC7W2jc_dE8DxmWg1I8Ig7re8",
  authDomain: "prep-wise-ai.firebaseapp.com",
  projectId: "prep-wise-ai",
  storageBucket: "prep-wise-ai.firebasestorage.app",
  messagingSenderId: "279292726997",
  appId: "1:279292726997:web:538ccb77252ac290fe1c5c",
  measurementId: "G-C75JTNE41W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
