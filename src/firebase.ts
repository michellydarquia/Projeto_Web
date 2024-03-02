import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyBrUtjJ16pqoMBV8W-cwjXX-QT0zPHy37M",
    authDomain: "projeto-exames.firebaseapp.com",
    projectId: "projeto-exames",
    storageBucket: "projeto-exames.appspot.com",
    messagingSenderId: "450945606205",
    appId: "1:450945606205:web:8833aad912c1723c5e0054",
    measurementId: "G-7SYXBGR34W"
}

const app = initializeApp(config);
const auth = getAuth(app)

export { app, auth };