import firebase from 'firebase/compat/app'
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDK3UBWTdjJ53fyuzuWx485ehcwKa6SitI",
    authDomain: "spopia-test.firebaseapp.com",
    databaseURL: "https://spopia-test-default-rtdb.firebaseio.com",
    projectId: "spopia-test",
    storageBucket: "spopia-test.appspot.com",
    messagingSenderId: "546471051904",
    appId: "1:546471051904:web:bff724c65f7e2906849c65",
    measurementId: "G-Y8BKMSE8NF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth;
export const database = firebase.database();