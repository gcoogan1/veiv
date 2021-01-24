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

export const createUserProfileDocument = async(userAuth, additionalData)=> {
    //NOTE: userAuth is meant to reference the object that firebase creates when signing in using google
    if(!userAuth) return;           //if not signed in -> do nothing

    const userRef = firestore.doc(`users/${userAuth.uid}`);                 //IF created, firebase google auth automatically creates a uid for the user

    const snapShot = await userRef.get();                                                                      
    //console.log(snapShot)

    //FIREBASE NOTES
    //firebase sends a snapShot object of the google user 
    //on that snapShot object that firebase shows is an exists property 
    //that allows you to see if this google user is already in our users collection in firestore
    //.exists is a boolean

    //If the user does not exist in firestore, then create the user
    if(!snapShot.exists){  
        //As stated before, when google logs in a user, an object is created 
        //In that obj there is displayName and email that we will want to use to set the user in our collection 
        const {displayName, email} = userAuth; 
        const createdAt = new Date();
        
        try {

            //set user in collection
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData                       //copy any other data we might want
            })
            
        } catch (error) {
            console.log('error creating user', error.message)
        }

    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Google SignIn
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

