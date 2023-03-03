import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTQJVcbxuKma-t6edyWcV9cOh-lBXQSaw",
  authDomain: "thedojosite-3b435.firebaseapp.com",
  projectId: "thedojosite-3b435",
  storageBucket: "thedojosite-3b435.appspot.com",
  messagingSenderId: "428262511361",
  appId: "1:428262511361:web:e0ffd4424d0d7bb0e2c100",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
