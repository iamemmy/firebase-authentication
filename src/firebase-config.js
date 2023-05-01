import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWL12Drn4xjjEhqRJdtoYE_-Bjog9TaNI",
  authDomain: "authentication-f9f23.firebaseapp.com",
  projectId: "authentication-f9f23",
  storageBucket: "authentication-f9f23.appspot.com",
  messagingSenderId: "289686619724",
  appId: "1:289686619724:web:0241d272ed9c6fe69896e9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);