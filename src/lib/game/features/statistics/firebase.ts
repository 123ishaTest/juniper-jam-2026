// Import the functions you need from the SDKs you need
import { getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA2dvkA7qqAfkNVyFuX1ZIEn1mzdLYvqWI',
  authDomain: 'juniper-jam-metagame-ae1a2.firebaseapp.com',
  projectId: 'juniper-jam-metagame-ae1a2',
  storageBucket: 'juniper-jam-metagame-ae1a2.firebasestorage.app',
  messagingSenderId: '47713788103',
  appId: '1:47713788103:web:7f5427609700d55a8c1ee2',
};

export let firebaseApp: FirebaseApp | undefined;

// create singleton of firebase client app
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

export const firebaseAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
