import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyA4uhkdMOOunSg2oMG1IToQ5Reub6MwNbc",
  authDomain: "stone-bot.firebaseapp.com",
  projectId: "stone-bot",
  storageBucket: "stone-bot.appspot.com",
  messagingSenderId: "799945841455",
  appId: "1:799945841455:web:8ee11c8c0f312e6dae1fda",
  measurementId: "G-6GQ3YNWJ4N",
});

const auth = getAuth(firebaseApp)

const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();

export {auth, provider, db};