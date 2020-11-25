import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_1Z8eDFZDnGBt7M9uInd1XDZTDtZMtfg",
  authDomain: "beer-api-713a5.firebaseapp.com",
  databaseURL: "https://beer-api-713a5.firebaseio.com",
  projectId: "beer-api-713a5",
  storageBucket: "beer-api-713a5.appspot.com",
  messagingSenderId: "938397888569",
  appId: "1:938397888569:web:efdd6ce123ae3776655de8"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;