import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1G94ZCgPNSx8TMOM3q8EWv_GYAmJ_30U",
    authDomain: "foodtruckslocator.firebaseapp.com",
    projectId: "foodtruckslocator",
    storageBucket: "foodtruckslocator.appspot.com",
    messagingSenderId: "104363794014",
    appId: "1:104363794014:web:b322073de7caeb7308decf",
    measurementId: "G-1CW3P41FJB"
};

firebase.initializeApp(firebaseConfig);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;