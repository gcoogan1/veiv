import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBj9tT8HC2yXGxX72hPGz7L2g4V1IHryLM",
    authDomain: "viev-5004e.firebaseapp.com",
    projectId: "viev-5004e",
    storageBucket: "viev-5004e.appspot.com",
    messagingSenderId: "785764918592",
    appId: "1:785764918592:web:d45157b1046b8ef66306a5",
    measurementId: "G-ZPXBZJNQ3Y"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Google SignIn
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

