import express from 'express'
import cors from 'cors'

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

//import { getStorage } from "firebase/storage";

const app = express()
app.use(cors())

const config = {
    apiKey: "AIzaSyAIdICA1fmRb0s7KLgnW_LN3LKOug9fyvo",
    authDomain: "exames-9598c.firebaseapp.com",
    projectId: "exames-9598c",
    storageBucket: "exames-9598c.appspot.com",
    messagingSenderId: "984016399229",
    appId: "1:984016399229:web:9d021dad9091820a85fa14",
    measurementId: "G-PY8QMQFDKQ"
}

const App = initializeApp(config);
const auth = getAuth(App);
const firestore = getFirestore(App);





 
app.get('/login', function (req, res) {
  let email = req.query.email
  let senha = req.query.senha

  signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
      const user = userCredential.user
      res.send(true)
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log('ERRO:', errorCode, errorMsg)
  });
})

app.get('/logout', function (req, res) {
  signOut(auth).then(() => {
    res.send(false)
  }).catch((error) => {
    console.log(error)
  });
})

app.get('/getinfo', function (req, res) {

  onAuthStateChanged(auth, async (user) => {
    if (user) {

      const dados = doc(firestore, "users", user.uid)
      const info = await getDoc(dados);

      if (info.exists()) {

        const Dados = {
          CPF: info.data().CPF,
          nome: info.data().nome,
          CEP: info.data().CEP,
          endereco: info.data().endereco,
          email: info.data().email,
          nomeMae: info.data().nomeDaMae,
          RG: info.data().RG,
          conta: info.data().conta,
          nullOrNotLogged: false
        }
        console.log("foi!");
        res.send(Dados)
      } else {
        console.log("Não exitem dados!");
      }
    } else {
      console.log("Não logado!");
    }
  })
})



app.listen(3000)