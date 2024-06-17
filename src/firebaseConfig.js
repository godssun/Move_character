// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCvYkjTmwFXvunT3Voi41MQH3mtKe_r6qQ",
  authDomain: "move-character.firebaseapp.com",
  databaseURL: "https://move-character-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "move-character",
  storageBucket: "move-character.appspot.com",
  messagingSenderId: "282389687709",
  appId: "1:282389687709:web:f25af4301cfd6c18b71374",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
