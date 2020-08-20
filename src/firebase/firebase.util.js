import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAGLfx6qOaGavX-XZ_fC-8X1PWF63JLvlM",
    authDomain: "fashion-db-14f32.firebaseapp.com",
    databaseURL: "https://fashion-db-14f32.firebaseio.com",
    projectId: "fashion-db-14f32",
    storageBucket: "fashion-db-14f32.appspot.com",
    messagingSenderId: "1099215264932",
    appId: "1:1099215264932:web:92a5e52fc3af4ee8909a31",
    measurementId: "G-Q1EZS38VZZ"
};
// Initialize Firebase
firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

