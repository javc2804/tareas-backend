// src/config/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcLgX1MDRydMEgd59NqzzIidVhUrWag8k",
  authDomain: "tareas-19e05.firebaseapp.com",
  projectId: "tareas-19e05",
  storageBucket: "tareas-19e05.appspot.com",
  messagingSenderId: "658539786207",
  appId: "1:658539786207:web:d2223a0d4c1651f7515e6a",
  measurementId: "G-QEZ8P28CS6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
