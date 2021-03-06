import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAUz8nJLWfgNaTpVN8kUnt3A4RwDC8RDpo",
  authDomain: "e-commerce-app-db-f15d2.firebaseapp.com",
  projectId: "e-commerce-app-db-f15d2",
  storageBucket: "e-commerce-app-db-f15d2.appspot.com",
  messagingSenderId: "613243348655",
  appId: "1:613243348655:web:79cdc3f8d8a452591dd65a",
  measurementId: "G-3MJ0L5K28T"
};
firebase.initializeApp(config);