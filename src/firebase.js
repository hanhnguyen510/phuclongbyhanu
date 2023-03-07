// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: 'phuclongbyhanu.firebaseapp.com',
    projectId: 'phuclongbyhanu',
    storageBucket: 'phuclongbyhanu.appspot.com',
    messagingSenderId: '763181782065',
    appId: '1:763181782065:web:ca94fd7fcc02477080b110',
    measurementId: 'G-LWM0XX5QMP',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
