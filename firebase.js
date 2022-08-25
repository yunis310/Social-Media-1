import { getStorage } from "firebase/storage";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "facebook-yunis.firebaseapp.com",
  projectId: "facebook-yunis",
  storageBucket: "facebook-yunis.appspot.com",
  messagingSenderId: "282043533699",
  appId: "1:282043533699:web:c94a397d56b0923eff0eb6",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();

export { db, storage };
 