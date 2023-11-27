import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAR-rvm0QJfpGBy0i978rCG9lPsAocfgGo",
  authDomain: "thesis0-a252e.firebaseapp.com",
  projectId: "thesis0-a252e",
  storageBucket: "thesis0-a252e.appspot.com",
  messagingSenderId: "324267619899",
  appId: "1:324267619899:web:660c452230a9ce5dd68e1e",
  measurementId: "G-M4G5X6MN3X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
