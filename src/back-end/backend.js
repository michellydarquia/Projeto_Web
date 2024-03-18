import express from 'express'
import cors from 'cors'

import { initializeApp } from "firebase/app";

import admin from 'firebase-admin';
import * as admauth from "firebase-admin/auth";
import admCert from './exames-9598c-firebase-adminsdk-cvzs6-761da459ad.json' with { type: "json" };

import * as fs from 'fs'

import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, getDocs, collection, setDoc } from "firebase/firestore";

const app = express();
app.use(cors());

const server = app.listen(3000);

const config = {
    apiKey: "AIzaSyAIdICA1fmRb0s7KLgnW_LN3LKOug9fyvo",
    authDomain: "exames-9598c.firebaseapp.com",
    projectId: "exames-9598c",
    storageBucket: "exames-9598c.appspot.com",
    messagingSenderId: "984016399229",
    appId: "1:984016399229:web:9d021dad9091820a85fa14",
    measurementId: "G-PY8QMQFDKQ",
};

const App = initializeApp(config);
const auth = getAuth(App);
const firestore = getFirestore(App);

const admApp = admin.initializeApp({
  credential: admin.credential.cert(admCert)
})
const admAuth = admauth.getAuth(admApp)



const createUserDoc = async (user, Info) => {
  await setDoc(doc(firestore, "users", user.uid), Info);
}

const getalldocs = async () => {
  const alldocs = await getDocs(collection(firestore, "users"));
  return alldocs
}



app.get('/registrar', function (req, res) {

  let sendStuff = '';

  admAuth.createUser({
    email: req.query.uData.email,
    password: req.query.senha,
  })
  .then((userRecord) => {
    createUserDoc(userRecord, req.query.uData)
    .then(()=>{fs.mkdirSync(`./exames/${userRecord.uid}`)})
    
    sendStuff = 'Registrado';
  })
  .catch((error) => {
    sendStuff = `Erro: ${error}`;
  });
  res.send(sendStuff);
  return
})

app.get('/login', function (req, res) {

  signInWithEmailAndPassword(auth, 'qweasd@gmail.com', 'qweasd')
  .then((userCredential) => {

      const user = userCredential.user;
      console.log('a');
      return doc(firestore, "users", user.uid);

  })
  .then(async (dados)=>{

    const info = await getDoc(dados);
    return res.send({ log: true, id: info.data() })

  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
      console.log('ERRO:', errorCode, errorMsg);
  });
  return
})

app.get('/logout', function (req, res) {

  signOut(auth)
  .then(res.send(false))
  .catch((error) => {
    console.log(error);
  });
  return
})


app.get('/getdocs', function (req, res) {
  const doclist = [];
  getalldocs()
  .then((alldocs) => {

    alldocs.forEach((doc) => {
      if (doc.data().email != req.query.email){
        doclist.push({
          info: doc.data(),
          id: doc.id
        })
      }
    });
    return doclist

  })
  .then((doclist)=>{
    res.send(doclist)
  })
  return
})



