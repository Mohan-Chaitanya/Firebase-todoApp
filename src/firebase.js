import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
    apiKey: "AIzaSyB887Ay_H2qFxPBa-rizMR8Z595G5Q_Iuo",
    authDomain: "todo-firebaseapp-48ad1.firebaseapp.com",
    projectId: "todo-firebaseapp-48ad1",
    storageBucket: "todo-firebaseapp-48ad1.appspot.com",
    messagingSenderId: "249306248201",
    appId: "1:249306248201:web:afdd14147aca433df274d8"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;