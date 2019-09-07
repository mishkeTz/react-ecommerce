import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABGlAubGfIC1J2ei6-SYGz-8FdZfTk7Ns",
    authDomain: "react-ecommerce-9c3fa.firebaseapp.com",
    databaseURL: "https://react-ecommerce-9c3fa.firebaseio.com",
    projectId: "react-ecommerce-9c3fa",
    storageBucket: "",
    messagingSenderId: "710473779399",
    appId: "1:710473779399:web:fcf730ddea61cb9b6296e2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;