// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeKz92MPb3uIKIgBvuXLVgOe6APJtwHsg",
  authDomain: "car-doctor-client-88167.firebaseapp.com",
  projectId: "car-doctor-client-88167",
  storageBucket: "car-doctor-client-88167.appspot.com",
  messagingSenderId: "571366839789",
  appId: "1:571366839789:web:8a1e7fb57b9c5d0f4943e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;