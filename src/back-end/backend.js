import express from 'express'
import cors from 'cors'

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const app = express();
app.use(cors());

const config = {
    apiKey: "AIzaSyAIdICA1fmRb0s7KLgnW_LN3LKOug9fyvo",
    authDomain: "exames-9598c.firebaseapp.com",
    projectId: "exames-9598c",
    storageBucket: "exames-9598c.appspot.com",
    messagingSenderId: "984016399229",
    appId: "1:984016399229:web:9d021dad9091820a85fa14",
    measurementId: "G-PY8QMQFDKQ"
};

const App = initializeApp(config);
const auth = getAuth(App);
const firestore = getFirestore(App);

const createUserDoc = async (user, Info) => {
  await setDoc(doc(firestore, "users", user.uid), Info);
}

app.get('/registrar', function (req, res) {

  let sendStuff = '';

  createUserWithEmailAndPassword(auth, req.query.uData.email, req.query.senha)
  .then((userCredential) => {
    const user = userCredential.user;

    try {
      createUserDoc(user, req.query.uData);
    } catch (e) {
      sendStuff = `Erro: ${e}`;
    }
    sendStuff = 'Registrado';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMsg = error.message;
    sendStuff = `Erro: ${errorCode} , ${errorMsg}`;
  });

  res.send(sendStuff);

})
 
app.get('/login', function (req, res) {
  let email = req.query.email
  let senha = req.query.senha

  signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
      const user = userCredential.user;
      res.send(true);
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log('ERRO:', errorCode, errorMsg);
  });
})

app.get('/logout', function (req, res) {
  signOut(auth).then(() => {
    res.send(false);
  }).catch((error) => {
    console.log(error);
  });
})

app.get('/getinfo', function (req, res) {

  onAuthStateChanged(auth, async (user) => {
    if (user) {

      const dados = doc(firestore, "users", user.uid);
      const info = await getDoc(dados);

      if (info.exists()) {

        const sendDados = info.data()

        res.send(sendDados);

      } else {

        console.log("Não exitem dados!");

      }
    } else {

      console.log("Não logado!");

    }
  })
})

app.get('/getdocs', function (req, res) {

})



app.listen(3000);