import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:
    process.env.FIREBASE_API_KEY || "AIzaSyBIhxL52GlMrZGGPZvRqN45tKJVnViQT-U",
  authDomain:
    process.env.FIREBASE_AUTH_DOMAIN || "netflix-clone-c16e2.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "netflix-clone-c16e2",
  storageBucket:
    process.env.FIREBASE_STORAGE_BUCKET || "netflix-clone-c16e2.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID || "1098482235546",
  appId: process.env.APP_ID || "1:1098482235546:web:3fc54467864b39a5474723",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { auth, db };
