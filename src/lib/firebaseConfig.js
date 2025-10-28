import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_FIREBASE_PORJECT_ID,
  storageBucket: import.meta.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_FIREBASE_APP_ID,

  //measurementId: "G-CQEDJD2K57"
};

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps;

export const firestoreDB = getFirestore(app);