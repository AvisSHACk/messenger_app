// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getAnalytics} from "firebase/analytics";
// import {getMessaging} from "firebase/messaging"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics();
// const messaging = getMessaging(app);


export {
  app,
  // messaging
}