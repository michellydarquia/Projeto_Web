import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyAIdICA1fmRb0s7KLgnW_LN3LKOug9fyvo",
    authDomain: "exames-9598c.firebaseapp.com",
    projectId: "exames-9598c",
    storageBucket: "exames-9598c.appspot.com",
    messagingSenderId: "984016399229",
    appId: "1:984016399229:web:9d021dad9091820a85fa14",
    measurementId: "G-PY8QMQFDKQ"
}

const app = initializeApp(config);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };