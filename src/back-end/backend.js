import express from 'express'
import cors from 'cors'

import { initializeApp } from "firebase/app";

import admin from 'firebase-admin';
import * as admauth from "firebase-admin/auth";
import admCert from './exames-9598c-firebase-adminsdk-cvzs6-761da459ad.json' with { type: "json" };

import * as fs from 'fs'

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, getDocs, collection, setDoc } from "firebase/firestore";

import multer from 'multer'

const app = express();
app.use(cors());

app.listen(3000);

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

  signInWithEmailAndPassword(auth, req.query.email, req.query.senha)
  .then((userCredential) => {

      const user = userCredential.user;
      console.log('a');
      return [doc(firestore, "users", user.uid), user.uid];

  })
  .then(async (dados)=>{

    const info = await getDoc(dados[0]);
    return res.send({ log: true, uData: info.data(), id: dados[1] })

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
          uid: doc.id
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

app.get('/listexams', function (req, res) {
  const list = []
  const results = []

  if (fs.readdirSync(`./exames/${req.query.id}`).length == 0){
    list.push('none')
  } else {
    fs.readdirSync(`./exames/${req.query.id}`)
    .map(exam => {

      fs.readdirSync(`./exames/${req.query.id}/${exam}`)
      .map(file => {
        if (file == 'info.json'){
          try {

            const data = fs.readFileSync(`./exames/${req.query.id}/${exam}/${file}`);
            list.push(JSON.parse(data))

          } catch (error) {

            console.error(error);
            throw error;

          }

          results.push('Inisponível')

        } else if (file == 'resultado.pdf'){
          results.pop()
          results.push('Disponível')
        }
      })
    })
  }


  res.send([list, results])
  return
})

app.get('/createexam', function (req, res) {

  var num
  var i = 1

  while (true){
    if (!fs.readdirSync(`./exames/${req.query.id}`).includes(`exame${i}`)){
      num = i
      break
    }
    i++
  }

  const details = {
    exame: req.query.exam,
    index: num
  }

  const content = JSON.stringify(details)

  fs.mkdirSync(`./exames/${req.query.id}/exame${num}`)

  fs.writeFile(`./exames/${req.query.id}/exame${num}/info.json`, content, err => {
    if (err) {
      console.log('erro', err.message);
    }
    res.send('success')
  });

  return
})

app.get('/deleteexam', function (req, res) {

  fs.rm(`./exames/${req.query.id}/exame${req.query.index}`, { recursive: true, force: true }, err => {
    if (err) {
      throw err;
    }
    res.send('success')
  });

  return
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./exames/${req.query.id}/exame${req.query.index}`)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, 'resultado.pdf')
  }
})

const upload = multer({ storage: storage })

app.post('/addresult', upload.single("file"), async (req, res) => {
  console.log(req.file);
  res.send(true)
  return
})

app.get('/pdf', (req, res) => {
  fs.
  return
})

  










