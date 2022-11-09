import firebase from "firebase";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDK3UBWTdjJ53fyuzuWx485ehcwKa6SitI",
    authDomain: "spopia-test.firebaseapp.com",
    projectId: "spopia-test",
    storageBucket: "spopia-test.appspot.com",
    messagingSenderId: "546471051904",
    appId: "1:546471051904:web:bff724c65f7e2906849c65",
    measurementId: "G-Y8BKMSE8NF",
    databaseURL: "https://spopia-test-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const database = firebase.database();