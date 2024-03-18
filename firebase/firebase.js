// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "charity-nextjs-project.firebaseapp.com",
  projectId: "charity-nextjs-project",
  storageBucket: "charity-nextjs-project.appspot.com",
  messagingSenderId: "608701011984",
  appId: "1:608701011984:web:d89aacdfad9a06abd71295",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
