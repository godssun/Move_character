import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: "AIzaSyCvYkjTmwFXvunT3Voi41MQH3mtKe_r6qQ",
  authDomain: "move-character.firebaseapp.com",
  databaseURL: "https://move-character-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "move-character",
  storageBucket: "move-character.appspot.com",
  messagingSenderId: "282389687709",
  appId: "1:282389687709:web:f25af4301cfd6c18b71374",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
