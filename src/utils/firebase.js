import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// console.log(firebaseConfig);

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };