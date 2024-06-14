import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADXoIdSLzfw_Cuv7accxLBOOTuw5GmLi4",
  authDomain: "crypto-listing-954c4.firebaseapp.com",
  databaseURL: "https://crypto-listing-954c4-default-rtdb.firebaseio.com",
  projectId: "crypto-listing-954c4",
  storageBucket: "crypto-listing-954c4.appspot.com",
  messagingSenderId: "217301397020",
  appId: "1:217301397020:web:720c547ba3c6da6b7079d9",
  measurementId: "G-2PDVJ5L43X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database}