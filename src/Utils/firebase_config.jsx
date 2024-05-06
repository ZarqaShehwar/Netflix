
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBepjE0O6syIA2h79Ebw3mkNYg793Agmfw",
  authDomain: "netflix-clone-e9f79.firebaseapp.com",
  projectId: "netflix-clone-e9f79",
  storageBucket: "netflix-clone-e9f79.appspot.com",
  messagingSenderId: "328553738284",
  appId: "1:328553738284:web:7dc33e9ce9bbeb91c12189",
  measurementId: "G-K4GCFCD2YJ"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app) ;