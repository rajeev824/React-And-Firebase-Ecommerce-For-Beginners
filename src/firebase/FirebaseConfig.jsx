import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnl3Mv2OtSHLgsdQPhKSn4oIk6ox5wQoo",
  authDomain: "myecom-8958e.firebaseapp.com",
  projectId: "myecom-8958e",
  storageBucket: "myecom-8958e.appspot.com",
  messagingSenderId: "1082612256281",
  appId: "1:1082612256281:web:e9940654536eb10abb2488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

// Corrected export
export { auth, fireDB };
