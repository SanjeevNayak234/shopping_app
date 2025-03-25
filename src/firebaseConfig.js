import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcM7waebn02lBD5RKUP0rM0DdMIDToEKg", // From your project settings
  authDomain: "shopping-app-303f0.firebaseapp.com",
  projectId: "shopping-app-303f0",
  storageBucket: "shopping-app-303f0.appspot.com",
  messagingSenderId: "1020426543980",
  appId: "1:1020426543980:web:YOUR_APP_ID", // Replace YOUR_APP_ID with the actual App ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);