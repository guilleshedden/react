import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGwr_Zzv8YsMn3VSKyt4jOpmqqD-iAjGk",
  authDomain: "tiendacursoreact.firebaseapp.com",
  projectId: "tiendacursoreact",
  storageBucket: "tiendacursoreact.appspot.com",
  messagingSenderId: "485618313020",
  appId: "1:485618313020:web:1e14bafbc8a9e1836f6039"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
