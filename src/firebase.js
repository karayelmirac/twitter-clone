import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc3TlCTZU44Zw5TqcUA-90iJb2b8GxcN0",
  authDomain: "twitter-clone-github-a1238.firebaseapp.com",
  projectId: "twitter-clone-github-a1238",
  storageBucket: "twitter-clone-github-a1238.appspot.com",
  messagingSenderId: "806509197753",
  appId: "1:806509197753:web:7a01c1fa904aa87a859e68",
  measurementId: "G-14CGJNMP3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
