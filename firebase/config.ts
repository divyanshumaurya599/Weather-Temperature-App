import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// ✅ Your Firebase project config
const firebaseConfig = {
  apiKey: 'AIzaSyCYKT3FWOX_IrNA4TDT2Yr5yet_2dm2Gt0',                  // Web API key
  authDomain: 'learning-reactnativeapp.firebaseapp.com',             // Automatically formed
  projectId: 'learning-reactnativeapp',                              // Project ID
  storageBucket: 'learning-reactnativeapp.appspot.com',              // Formed using Project ID
  messagingSenderId: '384180627265',                                 // Project Number
  appId: '1:384180627265:android:67b31e3de412c626bfe3c0',            // App ID
  // measurementId: '' — Optional (not needed in React Native)
};

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export Auth instance
export const auth = getAuth(app);

// ✅ Reusable signIn function
export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};