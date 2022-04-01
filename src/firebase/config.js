import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgEoFMigiuOX1xvHpN1R9wYU7Tq-ACluA",
  authDomain: "shoes-shop-c3316.firebaseapp.com",
  projectId: "shoes-shop-c3316",
  storageBucket: "shoes-shop-c3316.appspot.com",
  messagingSenderId: "680008988019",
  appId: "1:680008988019:web:9498a1a5e6ac0568938106",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
  return app;
};
