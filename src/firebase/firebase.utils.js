import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWyXXMukoexoJuXhNaByIARon9eSaSHqQ",
    authDomain: "crwn-db-2ef4b.firebaseapp.com",
    projectId: "crwn-db-2ef4b",
    storageBucket: "crwn-db-2ef4b.appspot.com",
    messagingSenderId: "297266550728",
    appId: "1:297266550728:web:fdbfd3692290f46123d2fd"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const singInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;