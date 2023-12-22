// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9zethrXzTGaxswJWpcvBtTeQxn6Oq4AY",
  authDomain: "reactzing.firebaseapp.com",
  projectId: "reactzing",
  storageBucket: "reactzing.appspot.com",
  messagingSenderId: "1079460142362",
  appId: "1:1079460142362:web:e277b92210bbbd2a99e0a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db  = getFirestore(app);