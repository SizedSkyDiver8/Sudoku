// firebaseConfig.js (or wherever you want to initialize Firebase)
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-lYoMeKR5TlRi9CXEtCGmILTDhzHUDIE",
  authDomain: "sudoku-project-dec-2024.firebaseapp.com",
  databaseURL: "https://sudoku-project-dec-2024-default-rtdb.firebaseio.com",
  projectId: "sudoku-project-dec-2024",
  storageBucket: "sudoku-project-dec-2024.appspot.com",
  messagingSenderId: "941567917888",
  appId: "1:941567917888:web:06bf1016b34f84e492c4a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
