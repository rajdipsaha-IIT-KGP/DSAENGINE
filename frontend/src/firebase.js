// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4p2OEi28Msn1YW0-m_IAbptT7E5fXx2M",
  authDomain: "dsaengine-d9dd1.firebaseapp.com",
  projectId: "dsaengine-d9dd1",
  storageBucket: "dsaengine-d9dd1.appspot.com", // ⚠️ small fix here: `.app` → `.appspot.com`
  messagingSenderId: "367636288831",
  appId: "1:367636288831:web:92cc85777921762a8f2f8a",
  measurementId: "G-4V9DCV8PVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Setup for Google Sign-In
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
