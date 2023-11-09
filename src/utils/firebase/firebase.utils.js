import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRbfMrdXjWVl1GxMTvK6Rs5xJDCdlvqX4",
    authDomain: "crwn-clothing-db-4ac25.firebaseapp.com",
    projectId: "crwn-clothing-db-4ac25",
    storageBucket: "crwn-clothing-db-4ac25.appspot.com",
    messagingSenderId: "1028817388985",
    appId: "1:1028817388985:web:8971e1fd682f5315522268"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
};