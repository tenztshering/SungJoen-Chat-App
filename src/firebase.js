import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA9qwET8BNoDkgBvCx6vuSHdbDMOcMOwPc",
    authDomain: "uni-chat-1d8ee.firebaseapp.com",
    projectId: "uni-chat-1d8ee",
    storageBucket: "uni-chat-1d8ee.appspot.com",
    messagingSenderId: "1093320480989",
    appId: "1:1093320480989:web:48046c01d3fab9cbb5a334"
  }).auth();