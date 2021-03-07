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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;