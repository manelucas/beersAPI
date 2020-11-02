import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3x4eC5sUS4BIYQPsIa9q5MMm2ycsx9lw",
    authDomain: "beersapi.firebaseapp.com",
    databaseURL: "https://beersapi.firebaseio.com",
    projectId: "beersapi",
    storageBucket: "beersapi.appspot.com",
    messagingSenderId: "120438303662",
    appId: "1:120438303662:web:dcd4dd8a8d58940b15f63f",
    measurementId: "G-KSJFR5TDGC"
  };


  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
  
  export const provider = new firebase.auth.GoogleAuthProvider();
  
  export default firebase;
  