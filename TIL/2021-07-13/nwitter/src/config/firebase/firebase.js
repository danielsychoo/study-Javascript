import firebase from 'firebase/app'; // ? firebase 자체 import
import 'firebase/auth'; // ? firebase의 auth기능 import
import 'firebase/firestore'; // ? firebase의 firestore기능 import

require('dotenv');

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_APIKEY,
  authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECTID,
  storageBucket: process.env.REACT_APP_FB_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FB_APPID,
};

firebase.initializeApp(firebaseConfig);

export const FIREBASE_INSTANCE = firebase; // ? firebase 인스턴스 export
export const FIREBASE_AUTH = firebase.auth(); // ? auth기능 export
export const FIREBASE_FIRESTORE = firebase.firestore(); // ? firestore기능 export
